import { Injectable } from '@nestjs/common';
import { CreatePostgreqlDto } from './dto/create-postgreql.dto';
import { UpdatePostgreqlDto } from './dto/update-postgreql.dto';

@Injectable()
export class PostgreqlService {
  create(createPostgreqlDto: CreatePostgreqlDto) {
    return 'This action adds a new postgreql';
  }

  findAll() {
    return `This action returns all postgreql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postgreql`;
  }

  update(id: number, updatePostgreqlDto: UpdatePostgreqlDto) {
    return `This action updates a #${id} postgreql`;
  }

  remove(id: number) {
    return `This action removes a #${id} postgreql`;
  }
}
