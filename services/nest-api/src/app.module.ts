import { Module } from '@nestjs/common';
import { QuoteController } from './quote/quote.controller';
import { QuoteService } from './quote/quote.service';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class AppModule { }
