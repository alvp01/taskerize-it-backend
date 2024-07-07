import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}