import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GenreDto {
    @ApiProperty({ example: 'Фантастика', description: 'Название жанра' })
    @IsString()
    name: string;

    @IsString()
    genreId: string;
}
