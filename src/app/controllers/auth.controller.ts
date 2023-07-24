import { Request, Response } from 'express';
import { AuthService } from '../services';

let _authService: AuthService;

type AuthControllerioC = {
  AuthService: AuthService;
};

export class AuthController {
  constructor({ AuthService }: AuthControllerioC) {
    _authService = AuthService;
  }

  async register(req: Request, res: Response) {
    const { body } = req;
    const user = await _authService.register(body);

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { body } = req;
    const signInResponse = await _authService.login(body);

    return res.status(200).json(signInResponse);
  }
}
