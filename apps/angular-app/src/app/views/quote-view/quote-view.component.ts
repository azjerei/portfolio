import { AfterViewInit, Component } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrl: './quote-view.component.scss'
})
export class QuoteViewComponent implements AfterViewInit {
  public quote?: string;

  public constructor(private service: QuotesService) { }

  public ngAfterViewInit(): void {
    this.service.getQuote()
      .then((quote) => this.quote = quote);
  }
}
