import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnersService } from './partners.service';

@Controller('partners')
export class PartnersController {
    constructor(private readonly partnersService: PartnersService) { }

    @Post()
    create(@Body() createDto: any) {
        return this.partnersService.create(createDto);
    }

    @Get()
    findAll() {
        return this.partnersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.partnersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: any) {
        return this.partnersService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.partnersService.remove(+id);
    }
}
