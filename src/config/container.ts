import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { config } from '.';
import { StatusController } from '../app/controllers';
import { User } from '../app/data/models';
import { appRouter, statusRoutes } from '../app/routes';
import { Server } from '../server';

const container = createContainer();

container
  .register({
    Server: asClass(Server).singleton(),
    appRouter: asFunction(appRouter).singleton(),
    config: asValue(config),
  })
  .register({
    StatusRoutes: asFunction(statusRoutes).singleton(),
  })
  .register({
    StatusController: asClass(
      StatusController.bind(StatusController)
    ).singleton(),
  })
  .register({
    User: asValue(User),
  });
/* .register({
    HomeService: asClass(HomeService).singleton(),
  })
*/

export { container };
