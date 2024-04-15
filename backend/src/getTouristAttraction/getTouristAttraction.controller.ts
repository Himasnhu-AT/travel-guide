
import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetTouristAttractionService } from './getTouristAttraction.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('get-tourist-attraction')
export class GetTouristAttractionController {
  constructor(private service: GetTouristAttractionService) {}

  @Post()
  @ApiBody({ schema: { properties: { location: { type: 'string' } } } })
  getTouristAttraction(@Body('location') location: string) {
    return this.service.getTouristAttraction(location);
  }
}
