import { Router } from 'express';

import { UploadController } from '../controllers';
import { uploadFiles } from '../middlewares';

type UsersRoutesIoC = {
  UploadController: UploadController;
};

export default function ({ UploadController }: UsersRoutesIoC) {
  const router = Router();

  router.post('', [uploadFiles.single('file')], UploadController.saveInLocal);

  return router;
}
