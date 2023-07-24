import { Router } from 'express';

import { AuthController } from '../controllers';

type UsersRoutesIoC = {
  AuthController: AuthController;
};

export default function ({ AuthController }: UsersRoutesIoC) {
  const router = Router();

  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);

  return router;
}
