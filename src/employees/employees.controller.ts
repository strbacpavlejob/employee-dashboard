import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

import { Employee } from './schemas/employee.schema';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get(':employeeId')
  async getEmployee(
    @Param('employeeId') employeeId: string,
  ): Promise<Employee> {
    return this.employeesService.getEmployeeById(employeeId);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.employeesService.getEmployees();
  }

  @Post()
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @Patch(':employeeId')
  async updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @Delete(':employeeId')
  async deleteEmployee(
    @Param('employeeId') employeeId: string,
  ): Promise<Employee> {
    return this.employeesService.deleteEmployee(employeeId);
  }
}
