import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeesModule {}
