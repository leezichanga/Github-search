import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubPageService } from './githubpage/github.service';
import { FormsModule } from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
