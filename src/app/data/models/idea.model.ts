import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { IdeaModel } from '../interfaces';

const Idea = db.define<IdeaModel>(
  'ideas',
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

Idea.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.userId;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

export default Idea;
