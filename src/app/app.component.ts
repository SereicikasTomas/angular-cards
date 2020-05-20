import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Mountain hiking',
      imageUrl: 'assets/mountain.jpg',
      username: '@travelry',
      content: 'One of the best mountain views.',
    },
    {
      title: 'Magnificent nature',
      imageUrl: 'assets/trees.jpg',
      username: '@photogrpher',
      content: 'Scary, yet beautiful nature.',
    },
    {
      title: 'Adventure biking',
      imageUrl: 'assets/biking.jpg',
      username: '@bikerDude',
      content: 'Bike trail with a view.',
    },
  ];
}
