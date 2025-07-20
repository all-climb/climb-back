import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigsService {
  constructor(private readonly config: ConfigService) {}

  get server() {
    const config = {
      port: this.config.get<string>('SERVER_PORT') ?? 3000,
    };

    return config;
  }
}
