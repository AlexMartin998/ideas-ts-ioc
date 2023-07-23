import { Repository, UserModel } from '.';

export interface IUserRepository extends Repository<UserModel> {
  findOneByEmail(email: string): Promise<UserModel | null>;
}
