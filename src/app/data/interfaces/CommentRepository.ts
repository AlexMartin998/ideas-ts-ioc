import { CommentModel, Repository } from '.';

export interface ICommentRepository extends Repository<CommentModel> {
  findAllByIdea(ideaId: number): Promise<CommentModel[]>;
}
