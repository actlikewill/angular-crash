import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Anglular', 'React', 'Vue'];
  userModel = new User('Wilson', 'wilson@email.com', 11223, '', 'morning', true) 

  ngOnInit() {
    console.log('');
  }
}
