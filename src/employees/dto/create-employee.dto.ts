import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  emailAddress: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  homeAddress: string;
  @ApiProperty()
  dateOfEmployment: Date;
  @ApiProperty()
  dateOfBirth: Date;
}
