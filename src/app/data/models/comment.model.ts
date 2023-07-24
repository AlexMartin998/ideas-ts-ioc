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

Comment.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  values.create_at = values.createdAt;
  values.updated_at = values.updatedAt;

  delete values.ideaId;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

export default Comment;
