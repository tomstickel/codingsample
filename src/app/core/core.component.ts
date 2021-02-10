import { Component, OnInit } from '@angular/core';
import { SkyService } from '../services/sky.service';
import {repos} from '../repos';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  userName: string = "tomstickel"
  repos: repos[];
 
  loading: boolean = false;
  errorMessage;
  constructor( private skyService: SkyService) { }

  ngOnInit(): void {

    //this.skyService.getRepos('tomstickel').subscribe();
    this.getRepos();

  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.skyService.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
          console.log(response)
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }


}
