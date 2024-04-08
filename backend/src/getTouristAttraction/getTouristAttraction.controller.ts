import { Body, Controller, Get } from '@nestjs/common';
import { GetTouristAttractionService } from './getTouristAttraction.service';

@Controller('get-tourist-attraction')
export class GetTouristAttractionController {
  constructor(private service: GetTouristAttractionService) {}

  @Get()
  getTouristAttraction(@Body('location') location: string) {
    return this.service.getTouristAttraction(location);
  }
}
