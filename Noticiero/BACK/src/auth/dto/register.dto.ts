import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  @MinLength(1)
  readonly username: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(6)
  readonly password: string;
}
