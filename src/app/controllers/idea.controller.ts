import { Request, Response } from 'express';

import { IIdeaService } from '../services/interfaces';

let _ideaService: IIdeaService;

type IdeaControllerIoC = {
  IdeaService: IIdeaService;
};

export class IdeaController {
  constructor({ IdeaService }: IdeaControllerIoC) {
    _ideaService = IdeaService;
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    const newIdea = await _ideaService.create(body);

    return res.status(201).json(newIdea);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await _ideaService.findOne(+id);

    return res.status(200).json(user);
  }

  async findAllByAuthor(req: Request, res: Response) {
    const { authorId } = req.params;
    const authorIdeas = await _ideaService.findAllByAuthor(+authorId);

    return res.status(200).json(authorIdeas);
  }

  async findAll(_req: Request, res: Response) {
    const users = await _ideaService.findAll();

    return res.status(200).json(users);
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    const updatedUser = await _ideaService.update(+id, body);

    return res.status(200).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await _ideaService.remove(+id);

    return res.status(200).send();
  }
}
