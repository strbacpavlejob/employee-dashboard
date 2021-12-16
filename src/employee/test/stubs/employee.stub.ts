import { Employee } from 'src/employee/schemas/employee.schema';

export const employeeStub = (): Employee => {
  return {
    isDeleted: false,
    dateOfBirth: new Date('2021-12-16T14:37:04.076Z'),
    dateOfEmployment: new Date('2021-12-16T14:37:04.076Z'),
    homeAddress: 'Sarajevska 56',
    phoneNumber: '06271235',
    emailAddress: 'pajce@gmail.com',
    name: 'pajce',
    employeeId: 'aa204c4d-8606-42e1-b0c4-b89a7ac0e058',
  };
};
