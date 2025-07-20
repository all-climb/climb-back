import { InternalServerErrorException, Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { DataSource } from 'typeorm';
import { ConfigsService } from '@configs';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigsService],
      useFactory: (configsService: ConfigsService) => ({
        ...configsService.mysql,
        entities,
        synchronize: true,
      }),
    }),
  ],
})
export class MysqlModule implements OnModuleInit {
  constructor(private readonly datasource: DataSource) {}

  onModuleInit() {
    if (this.datasource.isInitialized) {
      console.log(`🚀 Mysql Connected.`);
    } else {
      throw new InternalServerErrorException('Mysql Connection Failed.', {
        cause: `Please contact the administrator.`,
      });
    }
  }
}
