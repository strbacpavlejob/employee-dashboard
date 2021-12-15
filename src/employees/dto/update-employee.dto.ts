import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto {
  @ApiProperty({ required: false, nullable: true })
  name?: string | null;
  @ApiProperty({ required: false, nullable: true })
  emailAddress?: string | null;
  @ApiProperty({ required: false, nullable: true })
  phoneNumber?: string | null;
  @ApiProperty({ required: false, nullable: true })
  homeAddress?: string | null;
  @ApiProperty({ required: false, nullable: true })
  dateOfEmployment?: Date | null;
  @ApiProperty({ required: false, nullable: true })
  dateOfBirth?: Date | null;
}