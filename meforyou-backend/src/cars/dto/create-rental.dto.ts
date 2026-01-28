
import { IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateRentalDto {
    @IsNumber()
    car_id: number;

    @IsDateString()
    start_date: string;

    @IsDateString()
    end_date: string;
}
