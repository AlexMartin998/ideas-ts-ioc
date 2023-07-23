import { Router } from 'express';
import { UserController } from '../controllers';

type UsersRoutesIoC = {
  UserController: UserController;
};

export default function ({ UserController }: UsersRoutesIoC) {
  const router = Router();

  router.get('', UserController.findAll);
  router.get('/by-email', UserController.findOneByEmail);
  router.get('/:id', UserController.findOne);
  router.patch('/:id', UserController.update);
  router.delete('/:id', UserController.remove);

  return router;
}
