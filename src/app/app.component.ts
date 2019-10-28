import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Album Product Store';
  productItem = {
    name: 'Its Well With My Soul',
    artist: 'Horratio Spafford',
    description: 'An inspiprational song for worship'
  }
}
