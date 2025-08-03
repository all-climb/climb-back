import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { v7 as uuid } from 'uuid';

@Injectable()
export class UUIDMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const txId = req.get('x-request-id') ?? uuid();

    next();
  }
}
