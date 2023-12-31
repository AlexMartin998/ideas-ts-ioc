import { IdeaDto, IdeaModel } from '../../data/interfaces';
import { Service } from './Service';

export interface IIdeaService extends Service<IdeaModel> {
  findAllByAuthor(authorId: number): Promise<IdeaModel[]>;
  findOne(id: number): Promise<IdeaModel>;
  createAuthorIdea(ideaDto: IdeaDto): Promise<IdeaModel>;
}
