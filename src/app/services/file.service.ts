import fs from 'fs';

import { NotFoundException } from '../../exceptions';
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

  async findOne(id: number) {
    const file = await this.repository.findOne(id);
    if (!file) throw new NotFoundException(`File with id ${id} not found`);

    return file;
  }

  async findFilePath(id: number) {
    const file = await this.findOne(id);
    const { file_path: filePath } = file;

    if (!fs.existsSync(filePath)) throw new NotFoundException('File not found');

    return filePath;
  }
}
