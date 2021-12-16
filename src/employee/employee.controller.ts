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
import { EmployeeService } from './employee.service';

import {
  ApiBody,
  ApiHeader,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('employee')
@ApiHeader({
  name: 'Employee controller',
  description: 'Manipulate employee data inside MongoDB',
})
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeesService: EmployeeService) {}

  @ApiResponse({
    status: 200,
    description: 'Return a list of deleted employees',
  })
  @Get('/deleted')
  async getDeletedEmployees(): Promise<Employee[]> {
    console.log();
    return this.employeesService.getDeletedEmployees();
  }

  @ApiResponse({ status: 200, description: 'Return a single employee' })
  @ApiParam({ name: 'employeeId', type: 'string' })
  @Get(':employeeId')
  async getEmployee(
    @Param('employeeId') employeeId: string,
  ): Promise<Employee> {
    return this.employeesService.getEmployeeById(employeeId);
  }

  @ApiResponse({ status: 200, description: 'Return a list of employees' })
  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.employeesService.getEmployees();
  }

  @ApiBody({
    type: CreateEmployeeDto,
    description: 'Full employee data with  optional parameter isDeleted',
  })
  @ApiResponse({
    status: 201,
    description: 'The record is successfully created',
  })
  @Post()
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @ApiResponse({ status: 200, description: 'Update a single employees' })
  @ApiParam({ name: 'employeeId', type: 'string' })
  @ApiBody({
    type: UpdateEmployeeDto,
    description: 'Partial or full employee data',
  })
  @Patch(':employeeId')
  async updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @ApiResponse({ status: 200, description: 'Soft deletes a single employee' })
  @ApiParam({ name: 'employeeId', type: 'string' })
  @Delete(':employeeId')
  async deleteEmployee(
    @Param('employeeId') employeeId: string,
  ): Promise<Employee> {
    return this.employeesService.deleteEmployee(employeeId);
  }
}
