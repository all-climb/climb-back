import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabasesModule } from '@databases';
import { ConfigsModule } from '@configs';
import { UUIDMiddleware } from '@middlewares';

@Module({
  imports: [DatabasesModule, ConfigsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUIDMiddleware).forRoutes('*');
  }
}
