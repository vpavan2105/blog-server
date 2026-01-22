import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsString } from 'class-validator';

/**
 * @CreateAuthDto : defines the shape of the api expects when creating  an auth record.
 * nest js uses for validation incomming data and transform raw json to proper js types.
 */
export class CreateAuthDto {
  @IsString()
  userId: string;

  @IsString()
  token: string;

  @IsDate()
  @Type(() => Date)
  expiryTime: Date;

  @IsBoolean()
  @Type(() => Boolean)
  isActive: boolean;
}
