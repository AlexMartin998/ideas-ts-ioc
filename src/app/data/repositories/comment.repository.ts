import { ModelStatic } from 'sequelize';

import { ICommentRepository, CommentModel } from '../interfaces';
import { BaseRepository } from './base.repository';

type CommentRepositoryIoC = {
  Comment: ModelStatic<CommentModel>;
};

export class CommentRepository
  extends BaseRepository<CommentModel>
  implements ICommentRepository
{
  constructor({ Comment }: CommentRepositoryIoC) {
    super(Comment);
  }

  findAllByIdea(ideaId: number): Promise<CommentModel[]> {
    return this.model.findAll({ where: { idea_id: ideaId } });
  }
}
