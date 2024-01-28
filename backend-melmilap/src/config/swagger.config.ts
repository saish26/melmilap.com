import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Melmilap API')
  .setDescription('Melmilap api description')
  .setVersion('1.0')
  .addTag('melmilap')
  .build();
