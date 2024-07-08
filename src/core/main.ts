import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import morgan from 'morgan';
import { createWriteStream } from 'node:fs';
import { get } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { AppModule } from './modules/app.module.js';

class Application {
    private _app: NestExpressApplication | undefined;
    private readonly _appModule: AppModule;
    private readonly _PORT: number;

    constructor(_appModule: AppModule, _PORT: number) {
        this._app = undefined;
        this._appModule = _appModule;
        this._PORT = _PORT;
    }

    public async start(): Promise<NestExpressApplication> {
        await this.initializeApp();
        await this.configureApp();
        await this.configureSwagger();
        await this.writeSwaggerFiles();
        await this._app?.listen(this._PORT);
        Logger.log(`🏄‍♀️ [APP] Application is running on: ${await this._app?.getUrl()}`);

        return this._app!;
    }

    private async initializeApp(): Promise<NestExpressApplication> {
        /**
         * Инициализация нужна, потому что конструктор
         * не обработает промис, возвращаемый фабрикой
         */
        if (!this._app) {
            this._app = await NestFactory.create<NestExpressApplication>(this._appModule);
        }
        return this._app;
    }

    private async configureApp(): Promise<void> {
        this._app?.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true,
            }),
        );
        this._app?.setGlobalPrefix('v1');
        this._app?.enableCors();
        this._app?.use(helmet());
        this._app?.use(morgan('combined'));
        this._app?.useStaticAssets(
            path.join(path.dirname(fileURLToPath(import.meta.url)), '/..', '/public'),
            {
                prefix: '/public/',
            },
        );
    }
    private async configureSwagger() {
        const swaggerCfg = new DocumentBuilder()
            .setTitle('REHub API')
            .setDescription('API для получения объектов недвижимости и выгрузки их в агрегаторы')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const swaggerDoc = SwaggerModule.createDocument(this._app!, swaggerCfg, {
            deepScanRoutes: true,
        });
        SwaggerModule.setup('/swagger', this._app!, swaggerDoc, {
            customSiteTitle: 'REHub Swagger API',
        });
    }

    private async writeSwaggerFiles() {
        if (process.env.NODE_ENV === 'development') {
            const serverUrl = 'http://localhost:3000';

            get(`${serverUrl}/swagger/swagger-ui-bundle.js`, function (response) {
                response.pipe(createWriteStream('swagger/swagger-ui-bundle.js'));
                Logger.log(`💾 Swagger UI bundle file written to: '/swagger/swagger-ui-bundle.js'`);
            });
            get(`${serverUrl}/swagger/swagger-ui-init.js`, function (response) {
                response.pipe(createWriteStream('swagger/swagger-ui-init.js'));
                Logger.log(`💾 Swagger UI init file written to: '/swagger/swagger-ui-init.js'`);
            });
            get(`${serverUrl}/swagger/swagger-ui-standalone-preset.js`, function (response) {
                response.pipe(createWriteStream('swagger/swagger-ui-standalone-preset.js'));
                Logger.log(
                    `💾 Swagger UI standalone preset file written to: '/swagger/swagger-ui-standalone-preset.js'`,
                );
            });
            get(`${serverUrl}/swagger/swagger-ui.css`, function (response) {
                response.pipe(createWriteStream('swagger/swagger-ui.css'));
                Logger.log(`💾 Swagger UI css file written to: '/swagger/swagger-ui.css'`);
            });
        }
    }
}

new Application(AppModule, 3000).start();
