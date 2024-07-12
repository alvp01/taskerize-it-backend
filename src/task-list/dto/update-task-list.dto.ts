import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTaskListDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}