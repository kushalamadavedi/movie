import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { moviecomponent } from 'src/shared/component/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    moviecomponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
