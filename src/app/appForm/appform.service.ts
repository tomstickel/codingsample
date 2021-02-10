import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';

@Injectable()
export class  HttpService {
    defaultParams = new URLSearchParams();
    constructor(private http: HttpClient) {  }

    public getData(): string {
        //console.log('in getData');
        return "Button has been clicked";        
    }

    public getLike(): string {
        return "Numerical input has been changed";
    }
    
    public getNew(): string {
        return "coin is ";
    }
}
