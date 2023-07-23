import express from 'express';

type AppRouterIoC = {
  StatusRoutes: express.Router;
  UserRoutes: express.Router;
};

export default function ({ StatusRoutes, UserRoutes }: AppRouterIoC) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use('/status', StatusRoutes);
  apiRoutes.use('/users', UserRoutes);

  router.use('/v1/api', apiRoutes);

  return router;
}
