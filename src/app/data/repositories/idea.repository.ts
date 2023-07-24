import { ModelStatic } from 'sequelize';

import { IIdeaRepository, IdeaModel } from '../interfaces';
import { BaseRepository } from './base.repository';

type IdeaRepositoryIoC = {
  Idea: ModelStatic<IdeaModel>;
};

export class IdeaRepository
  extends BaseRepository<IdeaModel>
  implements IIdeaRepository
{
  constructor({ Idea }: IdeaRepositoryIoC) {
    super(Idea);
  }

  async findAllByAuthor(authorId: number) {
    return this.model.findOne({ where: { user_id: authorId } });
  }
}
