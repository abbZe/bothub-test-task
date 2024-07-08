import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BooksModule } from '../../modules/books/books.module.js';
import { UsersModule } from '../../modules/users/users.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './database/database.module.js';

@Module({
    imports: [
        UsersModule,
        BooksModule,
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        CacheModule.register({
            // 1 minute
            ttl: 1 * 60 * 1000,
        }),
        /**
         * Почему SWAGGER имеет отдельную папку со стилями и бандлом?
         * Почему SWAGGER выводится через ServeStaticModule?
         * Потому что хостинг VERCEL имеет проблемы с отображением SWAGGER,
         * и требует такого подхода.
         */
        ServeStaticModule.forRoot({
            rootPath: path.join(path.dirname(fileURLToPath(import.meta.url)), '../../swagger'),
            serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class AppModule {}
