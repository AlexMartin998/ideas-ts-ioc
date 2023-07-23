import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { config } from '.';
import { StatusController, UserController } from '../app/controllers';
import { User } from '../app/data/models';
import { UserRepository } from '../app/data/repositories';
import { appRouter, statusRoutes } from '../app/routes';
import { UserService } from '../app/services';
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
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    User: asValue(User),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  });

export { container };
