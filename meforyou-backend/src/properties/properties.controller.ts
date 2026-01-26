import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from '../entities/properties/property.entity';

@Controller('properties')
export class PropertiesController {
    constructor(private readonly propertiesService: PropertiesService) { }

    @Post('lease')
    lease(@Body() createLeaseDto: any) {
        return this.propertiesService.lease(createLeaseDto);
    }

    @Get('leases')
    findAllLeases() {
        return this.propertiesService.findAllLeases();
    }

    @Post()
    create(@Body() createPropertyDto: Partial<Property>) {
        return this.propertiesService.create(createPropertyDto);
    }

    @Get()
    findAll() {
        return this.propertiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.propertiesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePropertyDto: Partial<Property>) {
        return this.propertiesService.update(+id, updatePropertyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.propertiesService.remove(+id);
    }
}
