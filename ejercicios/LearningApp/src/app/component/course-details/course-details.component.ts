import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentsItemsComponent } from '../students-items/students-items.component';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [StudentsItemsComponent],
  templateUrl: './course-details.component.html',
})
export class CourseDetailsComponent {
  @Input()students!:Student[] 
}
