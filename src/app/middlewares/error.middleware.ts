/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Error as SequelizeError } from 'sequelize';
import { MulterError } from 'multer';

import { Logger } from '../../utils';

export default (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let httpStatus = err.status || 500;
  let errorMessage: string = err.message;

  if (!err.message) {
    errorMessage = 'Something went wrong';
    httpStatus = 500;
  }
  if (err instanceof SequelizeError) {
    errorMessage = 'Record could not be saved';
    httpStatus = 500;
  }
  if (err instanceof MulterError) {
    errorMessage = 'Unexpected field name';
    httpStatus = 400;
  }

  Logger.error(err);

  return res.status(httpStatus).send({
    status: httpStatus,
    message: errorMessage,
  });
};
