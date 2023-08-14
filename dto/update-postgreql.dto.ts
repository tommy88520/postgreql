import { PartialType } from '@nestjs/mapped-types';
import { CreatePostgreqlDto } from './create-postgreql.dto';

export class UpdatePostgreqlDto extends PartialType(CreatePostgreqlDto) {}
