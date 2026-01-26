import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { Property } from '../entities/properties/property.entity';
import { Lease } from '../entities/properties/lease.entity';
import { PropertyType } from '../entities/properties/property-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Property, Lease, PropertyType])],
    controllers: [PropertiesController],
    providers: [PropertiesService],
    exports: [PropertiesService, TypeOrmModule],
})
export class PropertiesModule { }
