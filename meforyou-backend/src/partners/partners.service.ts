import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';

@Injectable()
export class PartnersService {
    constructor(
        @InjectRepository(Partner)
        private repo: Repository<Partner>,
    ) { }

    create(createDto: any) {
        return this.repo.save(createDto);
    }

    findAll() {
        return this.repo.find();
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    update(id: number, updateDto: any) {
        return this.repo.update(id, updateDto);
    }

    remove(id: number) {
        return this.repo.delete(id);
    }
}
