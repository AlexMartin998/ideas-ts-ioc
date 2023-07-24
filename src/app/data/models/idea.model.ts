import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { IdeaModel } from '../interfaces';

const Idea = db.define<IdeaModel>(
  'users',
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Idea;
