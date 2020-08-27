import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-get-api';
  // url = `http://jsonplaceholder.typicode.com/todos/1`;
  url = `https://jsonplaceholder.typicode.com/users`;
  // url = `http://echo.jsontest.com/key/value/one/two`;
  items = [];
  cities = [];
  names = [];


  constructor(private http: HttpClient) {
    console.log('this', this);
    console.log('this.http', this.http);

    this.http.get(this.url).toPromise().then(data => {
        console.log('data', data);

        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            console.log('key', key);
            console.log('data[key]', data[key])
            console.log('data[key].address', data[key].address)

            this.items.push(data[key]);
            console.log('items', this.items);
            this.names.push(data[key].name);
            this.cities.push(data[key].address.city);


            // console.log('1 items', this.items);
          }
        }

      console.log('2 items', this.items);
    });
  }
}
