import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from '../entities/cars/car.entity';

import { CarRental } from '../entities/cars/car-rental.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Car, CarRental])],
    controllers: [CarsController],
    providers: [CarsService],
    exports: [CarsService],
})
export class CarsModule { }
