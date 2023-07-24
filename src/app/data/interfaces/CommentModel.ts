import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface CommentModel
  extends Model<
    InferAttributes<CommentModel>,
    InferCreationAttributes<CommentModel>
  > {
  id?: CreationOptional<number>;
  comment: string;

  // timestamps
  created_at?: CreationOptional<Date>;
  updated_at?: CreationOptional<Date>;
}
