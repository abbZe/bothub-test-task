import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/core/modules/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    const timeout = 12_000;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    }, timeout);

    it(
        '/ (GET)',
        () => {
            return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
        },
        timeout,
    );

    /**
     * FOR-SALE
     */
    // === APARTMENT ===
    test(
        '/sale/apartment/:id (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/apartment/1`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBe(1);
                });
        },
        timeout,
    );
    test(
        '/sale/apartment (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/apartment`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBeGreaterThanOrEqual(1);
                });
        },
        timeout,
    );

    // === HOUSE ===
    test(
        '/sale/house/:id (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/house/1`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBe(1);
                });
        },
        timeout,
    );
    test(
        '/sale/house (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/house`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBeGreaterThanOrEqual(1);
                });
        },
        timeout,
    );

    // === LAND ===
    test(
        '/sale/land/:id (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/land/2`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBe(1);
                });
        },
        timeout,
    );
    test(
        '/sale/land (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/sale/land`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBeGreaterThanOrEqual(1);
                });
        },
        timeout,
    );

    /**
     * FOR-RENT
     */
    // === APARTMENT ===
    test(
        '/rent/apartment/:id (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/rent/apartment/1`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBe(1);
                });
        },
        timeout,
    );
    test(
        '/rent/apartment (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/rent/apartment`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBeGreaterThanOrEqual(1);
                });
        },
        timeout,
    );

    // === HOUSE ===
    test(
        '/rent/house/:id (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/rent/house/3`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBe(1);
                });
        },
        timeout,
    );
    test(
        '/rent/house (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/rent/house`)
                .expect(200)
                .then(({ body }: request.Response) => {
                    expect(body.length).toBeGreaterThanOrEqual(1);
                });
        },
        timeout,
    );

    test(
        '/feed/avito/ (GET) - success',
        async () => {
            return request(app.getHttpServer())
                .get(`/feed/avito/feed?feedType=s-apartment`)
                .expect(200)
                .expect('Content-type', 'application/xml');
        },
        timeout,
    );
});
