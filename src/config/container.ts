import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { config } from '.';
import {
  AuthController,
  StatusController,
  UserController,
} from '../app/controllers';
import { User } from '../app/data/models';
import { UserRepository } from '../app/data/repositories';
import { appRouter, authRoutes, statusRoutes, userRoutes } from '../app/routes';
import { AuthService, UserService } from '../app/services';
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
    UserRoutes: asFunction(userRoutes).singleton(),
    AuthRoutes: asFunction(authRoutes).singleton(),
  })
  .register({
    StatusController: asClass(
      StatusController.bind(StatusController)
    ).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    User: asValue(User),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  });

export { container };
