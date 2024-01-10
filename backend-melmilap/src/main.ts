import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  app.enableCors();

  app.use(helmet())

  app.useGlobalPipes(
    new ValidationPipe({
      //removes all properties of request's body which are not in dto
      whitelist: true,

      //all to transform properties, int -> string
      transform: false,
    }),
  );

  await app.listen(process.env.APP_PORT || 8080, () => {
    console.log('Server running on port:', process.env.APP_PORT);
    for (let i = 0; i < 5; i++) {
      console.log('.');
    }
  });
}
bootstrap();
