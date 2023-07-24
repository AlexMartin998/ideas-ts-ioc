import { IFileRepository, FileModel } from '../data/interfaces';
import { BaseService } from './base.service';
import { IFileService } from './interfaces';

type FileServiceIoC = {
  FileRepository: IFileRepository;
};

export class FileService
  extends BaseService<FileModel>
  implements IFileService
{
  private readonly fileRepository: IFileRepository;

  constructor({ FileRepository }: FileServiceIoC) {
    super(FileRepository);
    this.fileRepository = FileRepository;
  }

  async saveInLocal(): Promise<string> {
		
    return '';
  }
}
