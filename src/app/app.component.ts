import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderPizza() {
    fetch('http://localhost:3000/order')
      .then(response => response.text())
      .then(data => {
        console.log(data); // Log server response to the console
      })
      .catch(error => console.error(error));
  }
}