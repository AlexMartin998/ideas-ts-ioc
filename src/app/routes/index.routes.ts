import express from 'express';

type AppRouterIoC = {
  StatusRoutes: express.Router;
  UserRoutes: express.Router;
  AuthRoutes: express.Router;
};

export default function ({
  StatusRoutes,
  UserRoutes,
  AuthRoutes,
}: AppRouterIoC) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/status', StatusRoutes);
  apiRoutes.use('/auth', AuthRoutes);
  apiRoutes.use('/users', UserRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
