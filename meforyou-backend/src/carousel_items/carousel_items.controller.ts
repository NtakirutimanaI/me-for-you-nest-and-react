import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarouselItemsService } from './carousel_items.service';
import { CreateCarouselItemDto } from './dto/create-carousel_item.dto';
import { UpdateCarouselItemDto } from './dto/update-carousel_item.dto';

@Controller('carousel-items')
export class CarouselItemsController {
  constructor(private readonly carouselItemsService: CarouselItemsService) {}

  @Post()
  create(@Body() createCarouselItemDto: CreateCarouselItemDto) {
    return this.carouselItemsService.create(createCarouselItemDto);
  }

  @Get()
  findAll() {
    return this.carouselItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carouselItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarouselItemDto: UpdateCarouselItemDto) {
    return this.carouselItemsService.update(+id, updateCarouselItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carouselItemsService.remove(+id);
  }
}
