import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabasesModule } from '@databases';
import { ConfigsModule } from '@configs';
import { UUIDMiddleware } from '@middlewares';
import { ContextModule } from '@libs/context';

@Module({
  imports: [DatabasesModule, ConfigsModule, ContextModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUIDMiddleware).forRoutes('*');
  }
}
