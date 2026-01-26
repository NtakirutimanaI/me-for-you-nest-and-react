import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../entities/properties/property.entity';

import { Lease } from '../entities/properties/lease.entity';

@Injectable()
export class PropertiesService {
    constructor(
        @InjectRepository(Property)
        private readonly propertyRepository: Repository<Property>,
        @InjectRepository(Lease)
        private readonly leaseRepository: Repository<Lease>,
    ) { }

    lease(createLeaseDto: Partial<Lease>) {
        const lease = this.leaseRepository.create(createLeaseDto);
        return this.leaseRepository.save(lease);
    }

    findAllLeases() {
        return this.leaseRepository.find({
            relations: ['property', 'tenant'],
        });
    }

    create(createPropertyDto: Partial<Property>) {
        const property = this.propertyRepository.create(createPropertyDto);
        return this.propertyRepository.save(property);
    }

    findAll() {
        return this.propertyRepository.find({
            relations: ['property_type', 'owner', 'agent'],
        });
    }

    findOne(id: number) {
        return this.propertyRepository.findOne({
            where: { property_id: id },
            relations: ['property_type', 'owner', 'agent', 'leases'],
        });
    }

    update(id: number, updatePropertyDto: Partial<Property>) {
        return this.propertyRepository.update(id, updatePropertyDto);
    }

    remove(id: number) {
        return this.propertyRepository.delete(id);
    }
}
