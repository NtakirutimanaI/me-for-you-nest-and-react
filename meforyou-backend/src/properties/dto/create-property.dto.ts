
import { IsString, IsNumber, IsEnum, IsOptional, Min, IsArray, IsDecimal, IsBoolean } from 'class-validator';
import { PropertyStatus } from '../../entities/properties/property.entity';

export class CreatePropertyDto {
    @IsString()
    property_name: string;

    @IsString()
    street_address: string;

    @IsString()
    city: string;

    @IsNumber()
    @Min(0)
    monthly_rent: number;

    @IsNumber()
    @Min(0)
    bedrooms: number;

    @IsNumber()
    @Min(0)
    bathrooms: number;

    @IsNumber()
    @IsOptional()
    property_type_id: number;

    @IsEnum(PropertyStatus)
    @IsOptional()
    property_status?: PropertyStatus;

    @IsBoolean()
    @IsOptional()
    furnished?: boolean;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    photos_urls?: string[];
}
