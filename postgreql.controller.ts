import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostgreqlService } from './postgreql.service';
import { CreatePostgreqlDto } from './dto/create-postgreql.dto';
import { UpdatePostgreqlDto } from './dto/update-postgreql.dto';

@Controller('postgreql')
export class PostgreqlController {
  constructor(private readonly postgreqlService: PostgreqlService) {}

  @Post()
  create(@Body() createPostgreqlDto: CreatePostgreqlDto) {
    return this.postgreqlService.create(createPostgreqlDto);
  }

  @Get()
  findAll() {
    return this.postgreqlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postgreqlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostgreqlDto: UpdatePostgreqlDto) {
    return this.postgreqlService.update(+id, updatePostgreqlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postgreqlService.remove(+id);
  }
}
