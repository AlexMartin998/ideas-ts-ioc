/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Error as SequelizeError } from 'sequelize';

import { Logger } from '../../utils';

export default (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const httpStatus = err.status || 500;
  const errorMessage =
    !err.message || err instanceof SequelizeError
      ? 'Something went wrong'
      : err.message;
  Logger.error(err);

  return res.status(httpStatus).send({
    status: httpStatus,
    message: errorMessage,
  });
};
