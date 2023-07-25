import { FileDto, FileModel } from '../../data/interfaces';
import { Service } from './Service';

export interface IFileService extends Service<FileModel> {
  saveInLocal(file: FileDto): Promise<string>;
}
