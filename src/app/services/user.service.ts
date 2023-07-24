import { NotFoundException } from '../../exceptions';
import { IUserRepository, UserModel } from '../data/interfaces';
import { BaseService } from './base.service';
import { IUsersService } from './interfaces';

type UserServiceIoC = {
  UserRepository: IUserRepository;
};

export class UserService
  extends BaseService<UserModel>
  implements IUsersService
{
  private readonly userRepository: IUserRepository;

  constructor({ UserRepository }: UserServiceIoC) {
    super(UserRepository);
    this.userRepository = UserRepository;
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  async findOneByEmail(email: string): Promise<UserModel | null> {
    return this.userRepository.findOneByEmail(email);
  }
}
