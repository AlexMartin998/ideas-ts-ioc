import { Request, Response } from 'express';

import { IUsersService } from '../services/interfaces';

let _userService: IUsersService;

type UserServiceIoC = {
  UserService: IUsersService;
};

export class UserController {
  constructor({ UserService }: UserServiceIoC) {
    _userService = UserService;
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await _userService.findOne(+id);

    return res.status(200).json(user);
  }

  async findOneByEmail(req: Request, res: Response) {
    const { email } = req.body;
    const user = await _userService.findOneByEmail(email);

    return res.status(200).json(user);
  }

  async findAll(req: Request, res: Response) {
    const users = await _userService.findAll();

    return res.status(200).json(users);
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    const updatedUser = await _userService.update(+id, body);

    return res.status(200).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await _userService.remove(+id);

    return res.status(200).send();
  }
}
