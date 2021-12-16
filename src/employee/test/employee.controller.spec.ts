import { Test } from '@nestjs/testing';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { EmployeeController } from '../employee.controller';
import { EmployeeService } from '../employee.service';
import { Employee } from '../schemas/employee.schema';
import { deletedEmployeeStub } from './stubs/deleted.employee.stub';
import { employeeStub } from './stubs/employee.stub';

jest.mock('../employee.service.ts');

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    jest.clearAllMocks();
  });

  describe('getEmployee', () => {
    describe('when getEmployee is called', () => {
      let employee: Employee;

      beforeEach(async () => {
        employee = await employeeController.getEmployee(
          employeeStub().employeeId,
        );
      });

      test('then it should call employeeService', () => {
        expect(employeeService.getEmployeeById).toBeCalledWith(
          employeeStub().employeeId,
        );
      });

      test('then is should return a employee', () => {
        expect(employee).toEqual(employeeStub());
      });
    });
  });

  describe('getEmployees', () => {
    describe('when getEmployees is called', () => {
      let employees: Employee[];

      beforeEach(async () => {
        employees = await employeeController.getEmployees();
      });

      test('then it should call employeeService', () => {
        expect(employeeService.getEmployees).toHaveBeenCalled();
      });

      test('then it should return employees', () => {
        expect(employees).toEqual([employeeStub()]);
      });
    });
  });

  describe('getDeletedEmployees', () => {
    describe('when getDeletedEmployees is called', () => {
      let employees: Employee[];

      beforeEach(async () => {
        employees = await employeeController.getDeletedEmployees();
      });

      test('then it should call employeeService', () => {
        expect(employeeService.getDeletedEmployees).toHaveBeenCalled();
      });

      test('then it should return deleted employees', () => {
        expect(employees).toEqual([deletedEmployeeStub()]);
      });
    });
  });

  describe('createEmployee', () => {
    describe('when createEmployee is called', () => {
      let employee: Employee;
      let createEmployeeDto: CreateEmployeeDto;

      beforeEach(async () => {
        createEmployeeDto = {
          dateOfBirth: employeeStub().dateOfBirth,
          dateOfEmployment: employeeStub().dateOfEmployment,
          homeAddress: employeeStub().homeAddress,
          phoneNumber: employeeStub().phoneNumber,
          emailAddress: employeeStub().emailAddress,
          name: employeeStub().name,
        };
        employee = await employeeController.createEmployee(createEmployeeDto);
      });

      test('then it should call employeeService', () => {
        expect(employeeService.createEmployee).toHaveBeenCalledWith({
          dateOfBirth: createEmployeeDto.dateOfBirth,
          dateOfEmployment: createEmployeeDto.dateOfEmployment,
          homeAddress: createEmployeeDto.homeAddress,
          phoneNumber: createEmployeeDto.phoneNumber,
          emailAddress: createEmployeeDto.emailAddress,
          name: createEmployeeDto.name,
        });
      });

      test('then it should return a employee', () => {
        expect(employee).toEqual(employeeStub());
      });
    });
  });

  describe('updateEmployee', () => {
    describe('when updateEmployee is called', () => {
      let employee: Employee;
      let updateEmployeeDto: UpdateEmployeeDto;

      beforeEach(async () => {
        updateEmployeeDto = {
          name: 'alice',
          emailAddress: 'alice@gmail.com',
        };
        employee = await employeeController.updateEmployee(
          employeeStub().employeeId,
          updateEmployeeDto,
        );
      });

      test('then it should call employeeService', () => {
        expect(employeeService.updateEmployee).toHaveBeenCalledWith(
          employeeStub().employeeId,
          updateEmployeeDto,
        );
      });

      test('then it should return a employee', () => {
        expect(employee).toEqual(employeeStub());
      });
    });
  });
});
