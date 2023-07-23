import {
  AlreadyExistsException,
  UnauthorizedException,
} from '../../exceptions';
import { generateJWT } from '../../utils/helpers';
import { LoginDto, RegisterDto } from '../data/interfaces';
import { IUsersService } from './interfaces';

type AuthServiceIoC = {
  UserService: IUsersService;
};

export class AuthService {
  private readonly userService;

  constructor({ UserService }: AuthServiceIoC) {
    this.userService = UserService;
  }

  async register(user: RegisterDto) {
    const { email } = user;
    const userExist = await this.userService.findOneByEmail(email);
    if (userExist) throw new AlreadyExistsException('User already exists');

    return await this.userService.create(user);
  }

  async login({ email, password }: LoginDto) {
    const userExist = await this.userService.findOneByEmail(email);
    if (!userExist?.id || !userExist.comparePassword!(password))
      throw new UnauthorizedException(
        'There was a problem logging in. Check your email and password or create an account.'
      );

    const token = await generateJWT(userExist.id);

    return { token, user: userExist };
  }
}
