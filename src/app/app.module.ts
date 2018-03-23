import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { StrikethroughDirective } from './strikethrough.directive';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
