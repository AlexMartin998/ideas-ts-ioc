import { NotFoundException } from '../../exceptions';

export const handleUserErrors = (error: unknown) => {
  if (error instanceof NotFoundException)
    throw new NotFoundException('Invalid user');
};
