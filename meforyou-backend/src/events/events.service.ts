import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/events/event.entity';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
    ) { }

    create(createEventDto: Partial<Event>) {
        // Ideally we would set defaults here if needed, but entity handles some
        const event = this.eventRepository.create(createEventDto);
        return this.eventRepository.save(event);
    }

    findAll() {
        return this.eventRepository.find({
            relations: ['client', 'category', 'vendor_assignments'],
        });
    }

    findOne(id: number) {
        return this.eventRepository.findOne({
            where: { event_id: id },
            relations: ['client', 'category', 'vendor_assignments'],
        });
    }

    update(id: number, updateEventDto: Partial<Event>) {
        return this.eventRepository.update(id, updateEventDto);
    }

    remove(id: number) {
        return this.eventRepository.delete(id);
    }
}
