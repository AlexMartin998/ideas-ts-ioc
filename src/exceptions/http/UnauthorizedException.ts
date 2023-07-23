import { HttpException } from './HttpException.js';

export class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(message, 401);
    this.name = 'UnauthorizedException';
  }
}
