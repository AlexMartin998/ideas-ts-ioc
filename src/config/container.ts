import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { config } from '.';
import {
  AuthController,
  CommentController,
  IdeaController,
  StatusController,
  UserController,
} from '../app/controllers';
import { Comment, Idea, User } from '../app/data/models';
import {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} from '../app/data/repositories';
import {
  appRouter,
  authRoutes,
  commentRoutes,
  ideaRoutes,
  statusRoutes,
  userRoutes,
} from '../app/routes';
import {
  AuthService,
  CommentService,
  IdeaService,
  UserService,
} from '../app/services';
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
    IdeaRoutes: asFunction(ideaRoutes).singleton(),
    CommentRoutes: asFunction(commentRoutes).singleton(),
  })
  .register({
    StatusController: asClass(
      StatusController.bind(StatusController)
    ).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
  });

export { container };
