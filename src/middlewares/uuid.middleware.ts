import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { v7 as uuid } from 'uuid';
import { Context, ContextKey } from '@libs/context';

@Injectable()
export class UUIDMiddleware implements NestMiddleware {
  constructor(private readonly context: Context) {}

  use(req: Request, _: Response, next: NextFunction) {
    const txId = req.get('x-request-id') ?? uuid();

    this.context.set(ContextKey.TXID, txId);
    next();
  }
}
