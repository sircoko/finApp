import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exceptions.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Personal Finantials API')
    .setDescription('Personal Finantials App')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.port || 3000);
  console.log('API Gateway is running on port ', process.env.port || 3000);
}
bootstrap();
