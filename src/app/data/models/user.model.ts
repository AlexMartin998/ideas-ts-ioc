import { DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

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
  {
    timestamps: true,
    underscored: true,
    hooks: {
      beforeCreate: async function (user) {
        user.password = await bcryptjs.hash(user.password, 10);
      },
    },
    scopes: {
      removePassword: {
        attributes: {
          exclude: ['password', 'token', 'created_at', 'updated_at'],
        },
      },
    },
  }
);

// Custom methods
User.prototype.comparePassword = async function (password: string) {
  return await bcryptjs.compare(password, this.password);
};

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

export default User;
