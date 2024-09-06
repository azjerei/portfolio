import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { QuoteViewComponent } from "./views/quote-view/quote-view.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, QuoteViewComponent],
  imports: [CommonModule],
  exports: [AppComponent, QuoteViewComponent],
})
export class AppModule { }