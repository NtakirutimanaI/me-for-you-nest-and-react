import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from '../entities/cars/car.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserType } from '../entities/core/user.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CreateRentalDto } from './dto/create-rental.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post('rent')
    @UseGuards(JwtAuthGuard)
    rent(@Body() createRentalDto: CreateRentalDto) {
        return this.carsService.rent(createRentalDto);
    }

    @Get('rentals')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    findAllRentals() {
        return this.carsService.findAllRentals();
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    create(@Body() createCarDto: CreateCarDto) {
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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(+id, updateCarDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    remove(@Param('id') id: string) {
        return this.carsService.remove(+id);
    }
}
