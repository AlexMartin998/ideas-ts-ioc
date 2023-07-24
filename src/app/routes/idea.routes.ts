import { Router } from 'express';

import { IdeaController } from '../controllers';

type UsersRoutesIoC = {
  IdeaController: IdeaController;
};

export default function ({ IdeaController }: UsersRoutesIoC) {
  const router = Router();

  router.get('/:authorId/all', IdeaController.findAllByAuthor);
  router.get('/:id', IdeaController.findOne);
  router.post('/', IdeaController.create);
  router.patch('/:id', IdeaController.update);
  router.delete('/:id', IdeaController.remove);

  return router;
}
