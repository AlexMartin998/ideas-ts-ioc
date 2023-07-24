import { Request, Response } from 'express';

import { IFileService } from '../services/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let _fileService: IFileService;

type UploadControllerIoC = {
  FileService: IFileService;
};

export class UploadController {
  constructor({ FileService }: UploadControllerIoC) {
    _fileService = FileService;
  }

  async saveInLocal(req: Request, res: Response) {
    const { file } = req;
    console.log({ file });

    return res.status(201).json({ file_name: file?.filename });
  }
}
