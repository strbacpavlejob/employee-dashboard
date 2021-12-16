import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
