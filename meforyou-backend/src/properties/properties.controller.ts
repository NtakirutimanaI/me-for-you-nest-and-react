import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from '../entities/properties/property.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserType } from '../entities/core/user.entity';

@Controller('properties')
export class PropertiesController {
    constructor(private readonly propertiesService: PropertiesService) { }

    @Post('lease')
    @UseGuards(JwtAuthGuard)
    lease(@Body() createLeaseDto: any) {
        return this.propertiesService.lease(createLeaseDto);
    }

    @Get('leases')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    findAllLeases() {
        return this.propertiesService.findAllLeases();
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    update(@Param('id') id: string, @Body() updatePropertyDto: Partial<Property>) {
        return this.propertiesService.update(+id, updatePropertyDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    remove(@Param('id') id: string) {
        return this.propertiesService.remove(+id);
    }
}
