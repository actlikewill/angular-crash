import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', '', '', '', '', false)

  constructor( private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  validateTopic(value: string) {
    if (this.topics.indexOf(value) < 0) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}
