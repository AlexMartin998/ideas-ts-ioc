import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id?: CreationOptional<number>;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;

  // timestamps
  created_at?: CreationOptional<Date>;
  updated_at?: CreationOptional<Date>;
}
