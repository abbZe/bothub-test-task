import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../core/modules/database/database.module.js';
import { UsersModule } from '../users/users.module.js';
import { BooksController } from './books.controller.js';
import { BooksService } from './books.service.js';
import { booksProviders } from './providers/index.js';

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [BooksController],
    providers: [BooksService, ...booksProviders],
})
export class BooksModule {}
