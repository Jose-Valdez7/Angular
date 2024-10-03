import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[students-items]',
  standalone: true,
  imports: [],
  templateUrl: './students-items.component.html',
  
})
export class StudentsItemsComponent {
  @Input()student!:Student
}
