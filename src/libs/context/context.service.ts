import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

export enum ContextKey {
  TXID = 'txId',
}

export const asyncLocalStorage = new AsyncLocalStorage<Map<ContextKey, any>>();

@Injectable()
export class Context {
  getStore() {
    return asyncLocalStorage.getStore();
  }

  set(key: ContextKey, value: any) {
    const store = this.getStore();

    if (store) {
      store.set(key, value);
    } else {
      throw new Error('There is no context store.');
    }
  }

  get<K>(key: ContextKey): K {
    return this.getStore()?.get(key);
  }
}
