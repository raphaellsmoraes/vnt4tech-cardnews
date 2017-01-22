import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardFeedService } from './shared/services/card-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CardFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
