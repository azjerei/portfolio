import { QuoteService } from "@/app/services/quote-service";
import React from "react";
import './quote-view.css';

export default async function QuoteView() {
  const quote = await QuoteService.getQuote();

  return (
    <>
      {!quote && <div>Loading quote...</div>}
      {!!quote && <div className="quote">{quote}</div>}
    </>
  );
}