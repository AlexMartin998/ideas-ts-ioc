import express from 'express';

type AppRouterIoC = {
  StatusRoutes: express.Router;
  UserRoutes: express.Router;
  AuthRoutes: express.Router;
  IdeaRoutes: express.Router;
};

export default function ({
  StatusRoutes,
  UserRoutes,
  AuthRoutes,
  IdeaRoutes,
}: AppRouterIoC) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/status', StatusRoutes);
  apiRoutes.use('/auth', AuthRoutes);
  apiRoutes.use('/users', UserRoutes);
  apiRoutes.use('/ideas', IdeaRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
