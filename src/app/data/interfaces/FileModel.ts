import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface FileModel
  extends Model<
    InferAttributes<FileModel>,
    InferCreationAttributes<FileModel>
  > {
  id?: CreationOptional<number>;
  filename: string;
  mimetype: string;
  file_path: string;

  // timestamps
  created_at?: CreationOptional<Date>;
  updated_at?: CreationOptional<Date>;
}
