import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	/* PORT Logger Config */
	const PORT = process.env.LOCAL_POST || 3000;
	const serverOnline = `===== Server is running at ${PORT} ====== \n====== Good luck my dear friend ======`;

	const app = await NestFactory.create(AppModule);

	/* Swagger Module */
	const configSwagger = new DocumentBuilder()
		.setTitle('OpenApi for car fuel calculator')
		.setDescription('Documentation RESTAPI for CarFuelCalculator App')
		.setVersion('1.0.0')
		//.addTag('one')
		.build();
	const document = SwaggerModule.createDocument(app, configSwagger);
	SwaggerModule.setup('/api/docs', app, document);

	app.useGlobalPipes(new ValidationPipe());
	await app.listen(PORT, () => console.log(serverOnline));
}
bootstrap();
