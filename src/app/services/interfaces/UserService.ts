import { UserModel } from '../../data/interfaces';
import { Service } from './Service';

export interface IUsersService extends Service<UserModel> {
  findOneByEmail(email: string): Promise<UserModel | null>;
  findOne(id: number): Promise<UserModel>;
}
