import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiSecurity,
    ApiTags,
} from '@nestjs/swagger';
import { UserRole } from '../users/constants/index.js';
import { Roles } from '../users/decorators/roles.decorator.js';
import { JwtAuthGuard, RolesGuard } from '../users/guards/index.js';
import { BooksService } from './books.service.js';
import { CreateBookDto, UpdateBookDto } from './dtos/index.js';
import { IBook } from './interfaces/book.interface.js';
import { BookModel } from './models/index.js';

@ApiTags('books')
@Controller('books')
export class BooksController {
    private readonly _booksService: BooksService;

    constructor(_booksService: BooksService) {
        this._booksService = _booksService;
    }

    @Get()
    @ApiOperation({ summary: 'Получить список всех книг' })
    @ApiResponse({
        status: 200,
        description: 'Список книг успешно получен.',
        type: () => BookModel,
    })
    async getAllBooks(): Promise<IBook[]> {
        return await this._booksService.getAllBooks();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить книгу по ID' })
    @ApiResponse({ status: 200, description: 'Книга найдена.', type: () => BookModel })
    @ApiResponse({ status: 404, description: 'Книга с ID ${id} не найдена.' })
    @ApiParam({ name: 'id', type: () => String, description: 'ID книги' })
    async getBook(@Param('id') id: string): Promise<IBook> {
        return await this._booksService.getBook(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @ApiBearerAuth()
    @ApiSecurity('bearerAuth')
    @ApiOperation({ summary: 'Создать новую книгу' })
    @ApiResponse({ status: 201, description: 'Книга успешно создана.', type: () => BookModel })
    @ApiBody({ type: () => CreateBookDto })
    async createBook(@Body() createBookDto: CreateBookDto): Promise<IBook> {
        return await this._booksService.createBook(createBookDto);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @ApiBearerAuth()
    @ApiSecurity('bearerAuth')
    @ApiOperation({ summary: 'Обновить книгу по ID' })
    @ApiResponse({ status: 200, description: 'Книга успешно обновлена.', type: () => BookModel })
    @ApiParam({ name: 'id', type: () => String, description: 'ID книги' })
    @ApiBody({ type: () => UpdateBookDto })
    async updateBook(
        @Param('id') id: string,
        @Body() updateBookDto: UpdateBookDto,
    ): Promise<IBook> {
        return await this._booksService.updateBook(id, updateBookDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @ApiOperation({ summary: 'Удалить книгу по ID' })
    @ApiResponse({ status: 200, description: 'Книга успешно удалена.', type: () => BookModel })
    @ApiParam({ name: 'id', type: () => String, description: 'ID книги' })
    async deleteBook(@Param('id') id: string): Promise<IBook> {
        return await this._booksService.deleteBook(id);
    }
}
