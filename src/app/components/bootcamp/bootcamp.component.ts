import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {
  topics = ['Anglular', 'React', 'Vue'];
  userModel = new User('Wilson', 'wilson@email.com', 11223, '', 'morning', true) 

  constructor() { }

  ngOnInit(): void {
  }

}
