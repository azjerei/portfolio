import { Injectable } from '@nestjs/common';
import * as quotes from './quotes.json';
import { Quote } from './quote.interface';

@Injectable()
export class QuoteService {
  private quotes: string[] = [];

  public constructor() {
    this.quotes = quotes;
  }

  public getQuote(): Quote {
    return { quote: this.quotes.at(Math.random() * this.quotes.length) };
  }
}
