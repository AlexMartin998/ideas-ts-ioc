import { asClass, asFunction, asValue, createContainer } from 'awilix';

import { config } from '.';
import {
  AuthController,
  CommentController,
  IdeaController,
  StatusController,
  UploadController,
  UserController,
} from '../app/controllers';
import { Comment, File, Idea, User } from '../app/data/models';
import {
  CommentRepository,
  FileRepository,
  IdeaRepository,
  UserRepository,
} from '../app/data/repositories';
import {
  appRouter,
  authRoutes,
  commentRoutes,
  ideaRoutes,
  statusRoutes,
  uploadRoutes,
  userRoutes,
} from '../app/routes';
import {
  AuthService,
  CommentService,
  FileService,
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
    UploadRoutes: asFunction(uploadRoutes).singleton(),
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
    UploadController: asClass(
      UploadController.bind(UploadController)
    ).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
    File: asValue(File),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    FileRepository: asClass(FileRepository).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    FileService: asClass(FileService).singleton(),
  });

export { container };
