import { Model } from 'sequelize';

export interface IdeaDto extends Model<IdeaDto> {
  name: string;
  description: string;
  user_id: number;
}
