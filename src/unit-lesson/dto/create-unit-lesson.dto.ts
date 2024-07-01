import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator';
import { IsObjectId } from '../../helpers/decorator/isValidObjectId.decorator';
export class CreateUnitLessonDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsObjectId()
    idLesson: string;

    @Type(() => ContentDto)
    @ValidateNested()
    @IsArray()
    @IsNotEmpty()
    content: ContentDto[];
}

class ContentDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsUrl()
    videoUrl: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    keyPoints: string[];
}

export class UpdateUnitLessonDto extends PartialType(CreateUnitLessonDto) { }