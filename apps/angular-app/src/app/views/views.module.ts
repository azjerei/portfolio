import { NgModule } from "@angular/core";
import { QuoteViewComponent } from "./quote-view/quote-view.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [QuoteViewComponent],
  exports: [QuoteViewComponent],
  imports: [CommonModule]
})
export class ViewModule { }