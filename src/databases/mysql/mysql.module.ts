import { InternalServerErrorException, Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '1234',
      database: 'climb',
      port: 3306,
      entities,
      synchronize: true,
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
