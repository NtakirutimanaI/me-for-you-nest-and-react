import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from '../entities/cars/car.entity';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post('rent')
    rent(@Body() createRentalDto: any) {
        return this.carsService.rent(createRentalDto);
    }

    @Get('rentals')
    findAllRentals() {
        return this.carsService.findAllRentals();
    }

    @Post()
    create(@Body() createCarDto: Partial<Car>) {
        return this.carsService.create(createCarDto);
    }

    @Get()
    findAll() {
        return this.carsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCarDto: Partial<Car>) {
        return this.carsService.update(+id, updateCarDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.carsService.remove(+id);
    }
}
