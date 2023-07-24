import express from 'express';

type AppRouterIoC = {
  StatusRoutes: express.Router;
  UserRoutes: express.Router;
  AuthRoutes: express.Router;
  IdeaRoutes: express.Router;
  CommentRoutes: express.Router;
  UploadRoutes: express.Router;
};

export default function ({
  StatusRoutes,
  UserRoutes,
  AuthRoutes,
  IdeaRoutes,
  CommentRoutes,
  UploadRoutes,
}: AppRouterIoC) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/status', StatusRoutes);
  apiRoutes.use('/auth', AuthRoutes);
  apiRoutes.use('/users', UserRoutes);
  apiRoutes.use('/ideas', IdeaRoutes);
  apiRoutes.use('/comments', CommentRoutes);
  apiRoutes.use('/uploads', UploadRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
