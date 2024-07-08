import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
    @ApiProperty({ example: 'Война и мир', description: 'Название книги' })
    @IsString()
    title: string;

    @ApiProperty({ example: 1, description: 'Идентификатор автора книги', type: 'integer' })
    @IsNumber()
    author: number;

    @ApiProperty({
        example: '2024-08-01T12:00:00.000Z',
        description: 'Дата публикации книги в ISO',
        type: 'string',
        format: 'date',
    })
    @Transform(({ value }) => new Date(value))
    @IsDate()
    publicationDate: Date;

    @ApiProperty({
        example: [1, 2],
        description: 'Массив идентификаторов жанров книги',
        type: 'array',
        items: { type: 'integer' },
    })
    @IsNumber({}, { each: true })
    genres: number[];
}
