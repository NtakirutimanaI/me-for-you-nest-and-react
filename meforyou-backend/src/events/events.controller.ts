import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from '../entities/events/event.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserType } from '../entities/core/user.entity';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    create(@Body() createEventDto: Partial<Event>) {
        return this.eventsService.create(createEventDto);
    }

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventsService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    update(@Param('id') id: string, @Body() updateEventDto: Partial<Event>) {
        return this.eventsService.update(+id, updateEventDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN, UserType.MANAGER, UserType.AGENT)
    remove(@Param('id') id: string) {
        return this.eventsService.remove(+id);
    }
}
