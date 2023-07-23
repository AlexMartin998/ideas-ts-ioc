import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { UserModel } from '../interfaces';

const User = db.define<UserModel>(
  'users',
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { timestamps: true, underscored: true }
);

export default User;
