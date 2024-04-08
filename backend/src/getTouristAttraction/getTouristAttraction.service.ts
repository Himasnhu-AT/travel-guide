import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import fetch from 'node-fetch';

@Injectable()
export class GetTouristAttractionService {
  constructor(private readonly prisma: PrismaService) {}

  async getTouristAttraction(location: string) {
    try {
      const eating_text: string =
        'catering.cafe,catering.fast_food,catering.restaurant';
      const tourism_text: string = 'tourism.attraction,tourism.sights';
      const shopping_text: string =
        'commercial.shopping_mall,commercial.supermarket,commercial.marketplace';

      const touristAttraction = await this.fetchApi(tourism_text);
      const eating = await this.fetchApi(eating_text);
      const shopping = await this.fetchApi(shopping_text);

      return { touristAttraction, eating, shopping };
    } catch (error) {
      throw new Error('Server failed to get tourist attraction.');
    }
  }

  async fetchApi(type: string) {
    const response = await fetch(
      `https://api.geoapify.com/v2/places?categories=${type}&filter=place:511547bee0b543534059433f759d57a23c40f00101f9019c41a30000000000c00209920312506174656c204e616761722054656873696c&limit=20&apiKey=${process.env.GEO_API_KEY}`,
    );
    // console.log(
    //   `https://api.geoapify.com/v2/places?categories=${type}&filter=place:511547bee0b543534059433f759d57a23c40f00101f9019c41a30000000000c00209920312506174656c204e616761722054656873696c&limit=20&apiKey=${process.env.GEO_API_KEY}`,
    // );
    const data = await response.json();
    return data;
  }
}
