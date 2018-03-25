import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';
// import {commonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubPageService } from './githubpage/github.service';
import { FormsModule } from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Defining routes
const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"about",component:AboutComponent},
 {path:"",redirectTo:"/github",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GithubPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
