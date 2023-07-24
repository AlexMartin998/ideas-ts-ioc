import { Router } from 'express';

import { AuthController } from '../controllers';
import { loginRules, registerRules } from '../middlewares';

type UsersRoutesIoC = {
  AuthController: AuthController;
};

export default function ({ AuthController }: UsersRoutesIoC) {
  const router = Router();

  router.post('/register', [...registerRules()], AuthController.register);
  router.post('/login', [...loginRules()], AuthController.login);

  return router;
}
