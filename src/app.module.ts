import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases';

@Module({
  imports: [DatabasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
