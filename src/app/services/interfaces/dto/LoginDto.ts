import { Model } from 'sequelize';

export interface LoginDto extends Model<LoginDto> {
  email: string;
  password: string;
}
