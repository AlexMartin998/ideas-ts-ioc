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
    const {
      filename,
      mimetype,
      path: filePath,
    } = req.file as Express.Multer.File;
    const fileDto = { filename, mimetype, file_path: filePath } as FileDto;

    const fileName = await _fileService.saveInLocal(fileDto);

    return res.status(201).json({ file_name: fileName });
  }

  async serveFile(req: Request, res: Response) {
    const { id } = req.params;

    const filePath = await _fileService.findFilePath(+id);

    return res.status(200).sendFile(filePath);
  }
}
