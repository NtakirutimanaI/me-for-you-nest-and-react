import { PartialType } from '@nestjs/mapped-types';
import { CreateCarouselItemDto } from './create-carousel_item.dto';

export class UpdateCarouselItemDto extends PartialType(CreateCarouselItemDto) {}
