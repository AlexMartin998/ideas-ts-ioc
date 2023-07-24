import { Router } from 'express';

import { CommentController } from '../controllers';

type UsersRoutesIoC = {
  CommentController: CommentController;
};

export default function ({ CommentController }: UsersRoutesIoC) {
  const router = Router();

  router.get('/:authorId/all', CommentController.findAllByAuthor);
  router.get('/:id', CommentController.findOne);
  router.post('/', CommentController.create);
  router.patch('/:id', CommentController.update);
  router.delete('/:id', CommentController.remove);

  return router;
}
