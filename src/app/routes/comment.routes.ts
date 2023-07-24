import { Router } from 'express';

import { CommentController } from '../controllers';
import { protectWithJwt } from '../middlewares';

type UsersRoutesIoC = {
  CommentController: CommentController;
};

export default function ({ CommentController }: UsersRoutesIoC) {
  const router = Router();

  router.get('/ideas/:ideaId', CommentController.findAllByIdea);
  router.get('/:id', CommentController.findOne);
  router.post('/', [protectWithJwt], CommentController.create);
  router.patch('/:id', CommentController.update);
  router.delete('/:id', CommentController.remove);

  return router;
}
