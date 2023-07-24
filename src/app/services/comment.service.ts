import { NotFoundException } from '../../exceptions';
import {
  CommentDto,
  CommentModel,
  ICommentRepository,
} from '../data/interfaces';
import { BaseService } from './base.service';
import { ICommentService, IIdeaService } from './interfaces';

type CommentServiceIoC = {
  CommentRepository: ICommentRepository;
  IdeaService: IIdeaService;
};

export class CommentService
  extends BaseService<CommentModel>
  implements ICommentService
{
  private readonly commentRepository: ICommentRepository;
  private readonly ideaService: IIdeaService;

  constructor({ CommentRepository, IdeaService }: CommentServiceIoC) {
    super(CommentRepository);
    this.commentRepository = CommentRepository;
    this.ideaService = IdeaService;
  }

  async createIdeaComment(
    commentDto: CommentDto,
    authorId: number
  ): Promise<CommentModel> {
    const { comment, idea_id } = commentDto;
    await this.ideaService.findOne(idea_id);

    const commentBody = { user_id: authorId, idea_id, comment };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.repository.create(commentBody as any);
  }

  async findOne(id: number) {
    const comment = await this.repository.findOne(id);
    if (!comment)
      throw new NotFoundException(`Comment with id ${id} not found`);

    return comment;
  }

  async findAllByIdea(ideaId: number): Promise<CommentModel[]> {
    await this.ideaService.findOne(ideaId);
    return this.commentRepository.findAllByIdea(ideaId);
  }
}
