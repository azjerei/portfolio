import { Controller, Get } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './quote.interface';

@Controller('quote')
export class QuoteController {
  public constructor(private readonly service: QuoteService) { }

  @Get()
  public async getHello(): Promise<Quote> {
    return this.service.getQuote();
  }
}
