import React from "react";
import { QuoteService } from "../../services/quote-service";
import './quote.css';

interface QuoteViewState {
  quote?: string;
}

export class QuoteView extends React.Component<unknown, QuoteViewState> {
  public constructor(props: unknown) {
    super(props);

    this.state = {};
  }

  public componentDidMount(): void {
    QuoteService
      .getQuote()
      .then((quote) => {
        this.setState({ quote: quote })
      });
  }

  public render(): React.ReactNode {
    const { quote } = this.state;

    return (
      <>
        {!quote && <div>Loading quote...</div>}
        {!!quote && <div className="quote">{quote}</div>}
      </>
    );
  }
}