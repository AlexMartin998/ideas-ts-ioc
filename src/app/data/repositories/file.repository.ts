import { ModelStatic } from 'sequelize';

import { IFileRepository, FileModel } from '../interfaces';
import { BaseRepository } from './base.repository';

type FileRepositoryIoC = {
  File: ModelStatic<FileModel>;
};

export class FileRepository
  extends BaseRepository<FileModel>
  implements IFileRepository
{
  constructor({ File }: FileRepositoryIoC) {
    super(File);
  }
}
