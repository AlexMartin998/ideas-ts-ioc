import { FileDto, FileModel, IFileRepository } from '../data/interfaces';
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

  async saveInLocal(file: FileDto): Promise<string> {
    const fileStored = await this.repository.create(file);

    return fileStored.filename;
  }
}
