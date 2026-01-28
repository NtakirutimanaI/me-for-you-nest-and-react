
import { IsString, IsNumber, IsEnum, IsOptional, Min, IsArray, IsDecimal } from 'class-validator';
import { Transform } from 'class-transformer';
import { Transmission, FuelType, CarStatus } from '../../entities/cars/car.entity';

export class CreateCarDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1900)
    year: number;

    @IsNumber()
    @Min(0)
    daily_rate: number;

    @IsEnum(Transmission)
    @IsOptional()
    transmission?: Transmission;

    @IsEnum(FuelType)
    @IsOptional()
    fuel_type?: FuelType;

    @IsNumber()
    @IsOptional()
    @Min(1)
    seats?: number;

    @IsNumber()
    @IsOptional()
    @Min(2)
    doors?: number;

    @IsString()
    @IsOptional()
    color?: string;

    @IsNumber()
    @IsOptional()
    mileage?: number;

    @IsString()
    @IsOptional()
    current_location?: string;

    @IsEnum(CarStatus)
    @IsOptional()
    car_status?: CarStatus;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    photos_urls?: string[];

    @IsNumber()
    @IsOptional()
    category_id?: number;
}
