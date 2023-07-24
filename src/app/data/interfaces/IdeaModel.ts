import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface IdeaModel
  extends Model<
    InferAttributes<IdeaModel>,
    InferCreationAttributes<IdeaModel>
  > {
  id?: CreationOptional<number>;
  name: string;
  description: string;
  user_id: number;

  // timestamps
  created_at?: CreationOptional<Date>;
  updated_at?: CreationOptional<Date>;
}
