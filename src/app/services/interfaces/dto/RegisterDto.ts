import { Model } from 'sequelize';

export interface RegisterDto extends Model<RegisterDto> {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}
