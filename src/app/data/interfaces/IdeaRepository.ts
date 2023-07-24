import { IdeaModel, Repository } from '.';

export interface IIdeaRepository extends Repository<IdeaModel> {
  findAllByAuthor(authorId: number): Promise<IdeaModel[]>;
  findOneWithAssociations(id: number): Promise<IdeaModel | null>;
}
