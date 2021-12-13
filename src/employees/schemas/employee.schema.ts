import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true, unique: true })
  employeeId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  emailAddress: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  homeAddress: string;

  @Prop({ required: true })
  dateOfEmployment: Date;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true, default: false })
  isDeleted: boolean;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
