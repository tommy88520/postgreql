import { Test, TestingModule } from '@nestjs/testing';
import { PostgreqlService } from './postgreql.service';

describe('PostgreqlService', () => {
  let service: PostgreqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgreqlService],
    }).compile();

    service = module.get<PostgreqlService>(PostgreqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
