import { Request, Response } from 'express';

import { ICommentService } from '../services/interfaces';

let _commentService: ICommentService;

type CommentControllerIoC = {
  CommentService: ICommentService;
};

export class CommentController {
  constructor({ CommentService }: CommentControllerIoC) {
    _commentService = CommentService;
  }

  async create(req: Request, res: Response) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { body, user } = req as any;
    const userId = +user.id;

    const newIdea = await _commentService.createIdeaComment(body, userId);

    return res.status(201).json(newIdea);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await _commentService.findOne(+id);

    return res.status(200).json(user);
  }

  async findAllByIdea(req: Request, res: Response) {
    const { ideaId } = req.params;
    const authorIdeas = await _commentService.findAllByIdea(+ideaId);

    return res.status(200).json(authorIdeas);
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    if (body?.user_id || body?.idea_id) {
      delete body?.user_id;
      delete body?.idea_id;
    }

    const updatedUser = await _commentService.update(+id, body);

    return res.status(200).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await _commentService.remove(+id);

    return res.status(200).send();
  }
}
