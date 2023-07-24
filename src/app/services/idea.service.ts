import { IIdeaRepository, IdeaModel } from '../data/interfaces';
import { BaseService } from './base.service';
import { IIdeaService } from './interfaces';

type IdeaServiceIoC = {
  IdeaRepository: IIdeaRepository;
};

export class IdeaService
  extends BaseService<IdeaModel>
  implements IIdeaService
{
  private readonly ideaRepository: IIdeaRepository;

  constructor({ IdeaRepository }: IdeaServiceIoC) {
    super(IdeaRepository);
    this.ideaRepository = IdeaRepository;
  }

  async findAllByAuthor(authorId: number): Promise<IdeaModel[]> {
    return this.ideaRepository.findAllByAuthor(authorId);
  }
}
