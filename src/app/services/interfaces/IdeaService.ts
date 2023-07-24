import { IdeaModel } from '../../data/interfaces';
import { Service } from './Service';

export interface IIdeaService extends Service<IdeaModel> {
  findAllByAuthor(authorId: number): Promise<IdeaModel[]>;
}
