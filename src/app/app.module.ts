import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowMoviesComponent } from './Components/show-movies/show-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
