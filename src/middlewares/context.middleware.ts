import { asyncLocalStorage, ContextKey } from '@libs/context';
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(_: Request, __: Response, next: NextFunction) {
    const store = new Map<ContextKey, any>();
    asyncLocalStorage.run(store, () => next());
  }
}
