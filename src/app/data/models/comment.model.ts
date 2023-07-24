import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { CommentModel } from '../interfaces';

const Comment = db.define<CommentModel>(
  'users',
  {
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Comment;
