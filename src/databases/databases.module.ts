import { Module } from '@nestjs/common';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [MysqlModule],
  exports: [],
})
export class DatabasesModule {}
