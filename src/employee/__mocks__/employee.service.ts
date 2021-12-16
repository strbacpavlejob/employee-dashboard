import { deletedEmployeeStub } from '../test/stubs/deleted.employee.stub';
import { employeeStub } from '../test/stubs/employee.stub';

export const EmployeeService = jest.fn().mockReturnValue({
  getEmployeeById: jest.fn().mockResolvedValue(employeeStub()),
  getEmployees: jest.fn().mockResolvedValue([employeeStub()]),
  getDeletedEmployees: jest.fn().mockResolvedValue([deletedEmployeeStub()]),
  createEmployee: jest.fn().mockResolvedValue(employeeStub()),
  updateEmployee: jest.fn().mockResolvedValue(employeeStub()),
  deleteEmployee: jest.fn().mockResolvedValue(employeeStub()),
});
