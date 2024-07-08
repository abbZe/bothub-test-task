import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class AuthorDto {
    @ApiProperty({ example: 'Иван', description: 'Имя автора' })
    @IsString()
    firstName: string;

    @ApiProperty({ example: 'Иванов', description: 'Фамилия автора' })
    @IsString()
    lastName: string;

    @ApiProperty({
        example: 'Иван Иванович Иванов — русский писатель...',
        description: 'Биография автора',
    })
    @IsString()
    bio: string;

    @ApiProperty({
        example: '1990-01-01',
        description: 'Дата рождения автора',
        type: 'string',
        format: 'date',
    })
    @IsDate()
    birthdate: Date;

    @IsString()
    authorId: string;
}
