import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../../config';
import { container } from '../../config/container';
import { Logger } from '../../utils';
import { IUsersService } from '../services';

const protectWithJwt: RequestHandler = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken || !bearerToken.startsWith('Bearer'))
    return res.status(401).json({ message: ['Invalid token'] });

  const tokenJwt = bearerToken.split(' ')[1];

  try {
    const { id } = jwt.verify(tokenJwt, config.JWT_SECRET) as { id: number };
    const userService: IUsersService = container.resolve('UserService');
    const user = await userService.findOne(id);

    req.user = user;

    return next();
  } catch (error) {
    Logger.error('Error while creating the JWT');
    Logger.error(JSON.stringify(error));
    return res.status(401).json({ message: ['Invalid token'] });
  }
};

export default protectWithJwt;
