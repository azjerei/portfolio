import * as React from 'react';
import './App.css'
import { QuoteView } from './views/quote/quote';

export class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <QuoteView />
      </div>
    );
  }
}
