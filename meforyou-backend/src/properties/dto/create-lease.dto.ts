
import { IsNumber, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLeaseDto {
    @IsNumber()
    property_id: number;

    @Type(() => Date)
    @IsDate()
    start_date: Date;

    @IsNumber()
    months: number;
}
