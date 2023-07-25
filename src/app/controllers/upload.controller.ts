import { Request, Response } from 'express';

import { FileDto } from '../data/interfaces';
import { IFileService } from '../services/interfaces';

let _fileService: IFileService;

type UploadControllerIoC = {
  FileService: IFileService;
};

export class UploadController {
  constructor({ FileService }: UploadControllerIoC) {
    _fileService = FileService;
  }

  async saveInLocal(req: Request, res: Response) {
    const { filename, mimetype } = req.file as Express.Multer.File;
    const fileDto = { filename, mimetype } as FileDto;

    const fileName = await _fileService.saveInLocal(fileDto);

    return res.status(201).json({ file_name: fileName });
  }
}
