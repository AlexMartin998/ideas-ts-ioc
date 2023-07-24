import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { CommentModel } from '../interfaces';

const Comment = db.define<CommentModel>(
  'comments',
  {
    comment: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.NUMBER,
    },
    idea_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Comment;
