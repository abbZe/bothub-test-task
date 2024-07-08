import { Connection } from 'mongoose';
import { DBConnection } from '../../../core/shared/constants/index.js';
import { ModelToken } from '../constants/index.js';
import { AuthorModel, BookModel, GenreModel } from '../models/index.js';

export const booksProviders = [
    {
        provide: ModelToken.BOOK,
        useFactory: (connection: Connection) => connection.model('Book', BookModel),
        inject: [DBConnection.MONGO],
    },
    {
        provide: ModelToken.AUTHOR,
        useFactory: (connection: Connection) => connection.model('Author', AuthorModel),
        inject: [DBConnection.MONGO],
    },
    {
        provide: ModelToken.GENRE,
        useFactory: (connection: Connection) => connection.model('Genre', GenreModel),
        inject: [DBConnection.MONGO],
    },
];
