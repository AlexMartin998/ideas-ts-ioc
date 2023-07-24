import { CommentDto, CommentModel } from '../../data/interfaces';
import { Service } from './Service';

export interface ICommentService extends Service<CommentModel> {
  findAllByIdea(ideaId: number): Promise<CommentModel[]>;
  createIdeaComment(
    commentDto: CommentDto,
    authorId: number
  ): Promise<CommentModel>;
}
