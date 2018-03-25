// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GithubPageService } from './githubpage/github.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private _githubService: GithubPageService) { }
  username:string;
  users: any = [];
  githubData: any = [];
  //avatarUrl="./assets/imageholder.png";

  ngOnInit() {
    this._githubService.getUser().subscribe(user => {
      //console.log(userName)
      this.users = user;
    })

    this._githubService.getRepos().subscribe(githubData => {
      //console.log(githubData)
      this.githubData = githubData;
    })
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      //console.log(userName)
      this.users = user;
    })

    this._githubService.getRepos().subscribe(githubData => {
      //console.log(userName)
      this.githubData = githubData;
    })
  }
}
