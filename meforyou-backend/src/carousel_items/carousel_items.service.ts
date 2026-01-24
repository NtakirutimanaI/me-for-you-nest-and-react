import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarouselItemDto } from './dto/create-carousel_item.dto';
import { UpdateCarouselItemDto } from './dto/update-carousel_item.dto';
import { CarouselItem } from './entities/carousel_item.entity';

@Injectable()
export class CarouselItemsService {
  constructor(
    @InjectRepository(CarouselItem)
    private repo: Repository<CarouselItem>,
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
