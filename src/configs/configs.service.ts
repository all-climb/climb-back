import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { DataSourceOptions } from 'typeorm';

@Injectable()
export class ConfigsService {
  constructor(private readonly config: ConfigService) {}

  get server() {
    const config = {
      port: this.config.get<string>('SERVER_PORT') ?? 3000,
    };

    this.checkUndefined(config, 'server');
    return config;
  }

  get isDev() {
    return this.config.get<string>('NODE_ENV') !== 'development';
  }

  get mysql() {
    const config: DataSourceOptions = {
      type: 'mysql',
      host: this.config.get<string>('MYSQL_HOST'),
      port: Number(this.config.get<string>('MYSQL_PORT')),
      username: this.config.get<string>('MYSQL_USERNAME'),
      password: this.config.get<string>('MYSQL_PASSWORD'),
      database: this.config.get<string>('MYSQL_DATABASE'),
    };

    this.checkUndefined(config, 'mysql');

    return config;
  }

  private checkUndefined(config: Record<string, any>, name: string) {
    Object.entries(config).forEach(([key, value]) => {
      if (value === undefined) {
        throw new Error(`env: ${name}'s ${key} is undefined. check please.`);
      }
    });
  }
}
