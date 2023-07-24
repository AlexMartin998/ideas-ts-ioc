import { ModelStatic } from 'sequelize';

import { IIdeaRepository, IUserRepository, IdeaModel } from '../interfaces';
import { BaseRepository } from './base.repository';

type IdeaRepositoryIoC = {
  Idea: ModelStatic<IdeaModel>;
  UserRepository: IUserRepository;
};

export class IdeaRepository
  extends BaseRepository<IdeaModel>
  implements IIdeaRepository
{
  private readonly userRepository: IUserRepository;

  constructor({ Idea, UserRepository }: IdeaRepositoryIoC) {
    super(Idea);
    this.userRepository = UserRepository;
  }

  async findAllByAuthor(authorId: number) {
    return this.model.findAll({
      where: { user_id: authorId },
      include: [{ model: this.userRepository.getModel() }],
    });
  }
}
