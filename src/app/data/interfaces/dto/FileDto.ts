import { Model } from 'sequelize';

export interface FileDto extends Model<FileDto> {
  filename: string;
  mimetype: string;
}
