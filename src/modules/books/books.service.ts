import {
    ConflictException,
    Inject,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { ModelToken } from './constants/index.js';
import { CreateBookDto, UpdateBookDto } from './dtos/index.js';
import { IAuthor, IBook, IGenre } from './interfaces/index.js';

@Injectable()
export class BooksService {
    private readonly _logger: Logger;
    private readonly _bookModel: Model<IBook>;
    private readonly _authorModel: Model<IAuthor>;
    private readonly _genreModel: Model<IGenre>;

    constructor(
        @Inject(ModelToken.BOOK)
        _bookModel: Model<IBook>,

        @Inject(ModelToken.AUTHOR)
        _authorModel: Model<IAuthor>,

        @Inject(ModelToken.GENRE)
        _genreModel: Model<IGenre>,
    ) {
        this._bookModel = _bookModel;
        this._authorModel = _authorModel;
        this._genreModel = _genreModel;
        this._logger = new Logger(BooksService.name);
    }

    async getAllBooks(): Promise<IBook[]> {
        try {
            return await this._bookModel.find().exec();
        } catch (error: any) {
            this._logger.error('Ошибка при получении всех книг', error.stack);
            throw new InternalServerErrorException('Ошибка при получении всех книг');
        }
    }

    async getBook(id: string): Promise<IBook> {
        try {
            const book = await this._bookModel.findById(id).exec();
            if (!book) {
                throw new NotFoundException(`Книга с идентификатором '${id}' не найдена`);
            }
            return book;
        } catch (error: any) {
            this._logger.error(`Ошибка при получении книги с идентификатором '${id}'`, error.stack);
            throw error;
        }
    }

    async createBook(createBookDto: CreateBookDto): Promise<IBook> {
        try {
            /**
             * Подразумевается что у нас есть справочник авторов
             * и справочник жанров на фронте и они передают нам айди жарнов и авторов
             */
            const authorExists = await this._authorModel
                .findOne({ authorId: createBookDto.author })
                .exec();
            if (!authorExists) {
                throw new NotFoundException('Указанный автор не найден');
            }

            const genresExist = await Promise.all(
                createBookDto.genres.map(genreId => this._genreModel.findOne({ genreId }).exec()),
            );
            // eslint-disable-next-line unicorn/no-null
            if (genresExist.includes(null)) {
                throw new NotFoundException('Один или несколько указанных жанров не найдены');
            }

            const existingBook = await this._bookModel
                .findOne({ title: createBookDto.title })
                .exec();
            if (existingBook) {
                throw new ConflictException('Книга с таким названием уже существует');
            }

            const newBook = await new this._bookModel({
                ...createBookDto,
                author: createBookDto.author,
                genres: createBookDto.genres,
            }).save();

            return newBook;
        } catch (error: any) {
            if (error instanceof ConflictException) {
                this._logger.error(
                    'Ошибка при добавлении книги, книга уже существует',
                    error.stack,
                );
                throw error;
            }

            this._logger.error('Ошибка при добавлении книги', error.stack);
            throw new InternalServerErrorException('Ошибка при добавлении книги');
        }
    }

    async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<IBook> {
        const updateObj: UpdateBookDto = {};

        if (updateBookDto.author) {
            const authorExists = await this._authorModel
                .findOne({ authorId: updateBookDto.author })
                .exec();
            if (!authorExists) {
                throw new NotFoundException('Указанный автор не найден');
            }
            updateObj.author = updateBookDto.author;
        }

        if (updateBookDto.genres) {
            const genresExist = await Promise.all(
                updateBookDto.genres.map(genreId => this._genreModel.findOne({ genreId }).exec()),
            );
            // eslint-disable-next-line unicorn/no-null
            if (genresExist.includes(null)) {
                throw new NotFoundException('Один или несколько указанных жанров не найдены');
            }
            updateObj.genres = updateBookDto.genres;
        }

        if (updateBookDto.title) {
            updateObj.title = updateBookDto.title;
        }

        if (updateBookDto.publicationDate) {
            updateObj['publicationDate'] = updateBookDto.publicationDate;
        }

        const updatedBook = await this._bookModel
            .findByIdAndUpdate(id, updateObj, { new: true })
            .exec();
        if (!updatedBook) {
            throw new NotFoundException(`Книга с идентификатором '${id}' не найдена`);
        }
        return updatedBook;
    }

    async deleteBook(id: string): Promise<IBook> {
        try {
            const deletedBook = await this._bookModel.findByIdAndDelete(id).exec();
            if (!deletedBook) {
                throw new NotFoundException(`Книга с идентификатором '${id}' не найдена`);
            }
            return deletedBook;
        } catch (error: any) {
            this._logger.error(`Ошибка при удалении книги с идентификатором '${id}'`, error.stack);
            throw error;
        }
    }
}
