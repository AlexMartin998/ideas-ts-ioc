import jwt from 'jsonwebtoken';

import { config } from '../../config';
import { Logger } from './..';

export const generateJWT = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
      if (err || !token) {
        const errorMessage = 'JWT could not be generated';
        Logger.error(err);
        Logger.error(errorMessage);

        return reject(errorMessage);
      }

      resolve(token);
    });
  });
};
