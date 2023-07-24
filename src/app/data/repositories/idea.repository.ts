import { ModelStatic } from 'sequelize';

import {
  ICommentRepository,
  IIdeaRepository,
  IUserRepository,
  IdeaModel,
} from '../interfaces';
import { BaseRepository } from './base.repository';

type IdeaRepositoryIoC = {
  Idea: ModelStatic<IdeaModel>;
  UserRepository: IUserRepository;
  CommentRepository: ICommentRepository;
};

export class IdeaRepository
  extends BaseRepository<IdeaModel>
  implements IIdeaRepository
{
  private readonly userRepository: IUserRepository;
  private readonly commentRepository: ICommentRepository;

  constructor({ Idea, UserRepository, CommentRepository }: IdeaRepositoryIoC) {
    super(Idea);
    this.userRepository = UserRepository;
    this.commentRepository = CommentRepository;
  }

  async findAllByAuthor(authorId: number) {
    return this.model.findAll({
      where: { user_id: authorId },
      include: [
        { model: this.userRepository.getModel() },
        { model: this.commentRepository.getModel() },
      ],
    });
  }

  async findOne(id: number): Promise<IdeaModel | null> {
    return this.model.findOne({
      where: { id },
      include: [
        { model: this.userRepository.getModel() },
        { model: this.commentRepository.getModel() },
      ],
    });
  }
}
