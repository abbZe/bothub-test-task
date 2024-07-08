import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../../core/modules/database/database.module.js';
import { MailModule } from '../../core/modules/mail/mail.module.js';
import { usersProviders } from './providers/index.js';
import { JwtStrategy, LocalStrategy } from './strategies/index.js';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

@Module({
    imports: [
        DatabaseModule,
        PassportModule,
        MailModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '2 days' },
        }),
    ],
    providers: [LocalStrategy, JwtStrategy, UsersService, JwtService, ...usersProviders],
    controllers: [UsersController],
    exports: [UsersService, ...usersProviders],
})
export class UsersModule {}
