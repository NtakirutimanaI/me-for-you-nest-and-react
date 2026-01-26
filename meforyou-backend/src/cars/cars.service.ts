import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../entities/cars/car.entity';

import { CarRental } from '../entities/cars/car-rental.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>,
        @InjectRepository(CarRental)
        private readonly rentalRepository: Repository<CarRental>,
    ) { }

    rent(createRentalDto: Partial<CarRental>) {
        const rental = this.rentalRepository.create(createRentalDto);
        return this.rentalRepository.save(rental);
    }

    findAllRentals() {
        return this.rentalRepository.find({
            relations: ['car', 'client'],
        });
    }

    create(createCarDto: Partial<Car>) {
        const car = this.carRepository.create(createCarDto);
        return this.carRepository.save(car);
    }

    findAll() {
        return this.carRepository.find({
            relations: ['category'],
        });
    }

    findOne(id: number) {
        return this.carRepository.findOne({
            where: { car_id: id },
            relations: ['category', 'rentals'],
        });
    }

    update(id: number, updateCarDto: Partial<Car>) {
        return this.carRepository.update(id, updateCarDto);
    }

    remove(id: number) {
        return this.carRepository.delete(id);
    }
}
