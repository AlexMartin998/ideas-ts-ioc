import { FileModel } from '../../data/interfaces';
import { Service } from './Service';

export interface IFileService extends Service<FileModel> {
  saveInLocal(): Promise<string>;
}
