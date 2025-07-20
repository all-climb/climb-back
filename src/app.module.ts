import { Module } from '@nestjs/common';
import { DatabasesModule } from '@databases';
import { ConfigsModule } from '@configs';

@Module({
  imports: [DatabasesModule, ConfigsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
