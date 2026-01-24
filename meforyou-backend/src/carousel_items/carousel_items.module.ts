import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarouselItemsService } from './carousel_items.service';
import { CarouselItemsController } from './carousel_items.controller';
import { CarouselItem } from './entities/carousel_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarouselItem])],
  controllers: [CarouselItemsController],
  providers: [CarouselItemsService],
  exports: [CarouselItemsService],
})
export class CarouselItemsModule { }
