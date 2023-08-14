import { Module } from '@nestjs/common';
import { PostgreqlService } from './postgreql.service';
import { PostgreqlController } from './postgreql.controller';

@Module({
  controllers: [PostgreqlController],
  providers: [PostgreqlService]
})
export class PostgreqlModule {}
