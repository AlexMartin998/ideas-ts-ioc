import { IdeaModel, Repository } from '.';

export interface IIdeaRepository extends Repository<IdeaModel> {
  findAllByAuthor(authorId: number): Promise<IdeaModel | null>;
}
