import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubPageService } from './githubpage/github.service';
import { FormsModule } from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive';
import { AboutComponent } from './about/about.component';

// Defining routes
const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"about",component:AboutComponent},

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GithubPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
