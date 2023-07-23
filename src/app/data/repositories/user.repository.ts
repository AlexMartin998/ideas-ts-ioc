import { ModelStatic } from 'sequelize';

import { BaseRepository } from './base.repository';
import { IUserRepository, UserModel } from '../interfaces';

type UserRepositoryIoC = {
  User: ModelStatic<UserModel>;
};

export class UserRepository
  extends BaseRepository<UserModel>
  implements IUserRepository
{
  constructor({ User }: UserRepositoryIoC) {
    super(User);
  }

  async findOneByEmail(email: string): Promise<UserModel | null> {
    return this.model.findOne({ where: { email } });
  }
}
