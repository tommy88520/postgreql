import { Test, TestingModule } from '@nestjs/testing';
import { PostgreqlController } from './postgreql.controller';
import { PostgreqlService } from './postgreql.service';

describe('PostgreqlController', () => {
  let controller: PostgreqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostgreqlController],
      providers: [PostgreqlService],
    }).compile();

    controller = module.get<PostgreqlController>(PostgreqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
