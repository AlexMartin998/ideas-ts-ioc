import { NotFoundException } from '../../exceptions';
import { IIdeaRepository, IdeaDto, IdeaModel } from '../data/interfaces';
import { BaseService } from './base.service';
import { IIdeaService, IUsersService } from './interfaces';

type IdeaServiceIoC = {
  IdeaRepository: IIdeaRepository;
  UserService: IUsersService;
};

export class IdeaService
  extends BaseService<IdeaModel>
  implements IIdeaService
{
  private readonly ideaRepository: IIdeaRepository;
  private readonly userService: IUsersService;

  constructor({ IdeaRepository, UserService }: IdeaServiceIoC) {
    super(IdeaRepository);
    this.ideaRepository = IdeaRepository;
    this.userService = UserService;
  }

  async createAuthorIdea(ideaDto: IdeaDto) {
    const { user_id } = ideaDto;
    await this.userService.findOne(user_id);

    return this.repository.create(ideaDto);
  }

  async findOne(id: number) {
    const idea = await this.ideaRepository.findOneWithAssociations(id);
    // TODO: get EntityName in BaseService to reuse this validation
    if (!idea) throw new NotFoundException(`Idea with id ${id} not found`);

    return idea;
  }

  async findAllByAuthor(authorId: number): Promise<IdeaModel[]> {
    await this.findOne(authorId);
    return this.ideaRepository.findAllByAuthor(authorId);
  }
}
