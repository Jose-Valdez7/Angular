import { Component, OnInit } from '@angular/core';
import { learning } from '../../model/learning';
import { CourseService } from '../../services/course.service';
import { CourseDetailsComponent } from "../course-details/course-details.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseDetailsComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit{

  learning!: learning;
course: any;
  constructor(private service:CourseService){}

  ngOnInit(): void {
    this.learning= this.service.getCourse();
  }
}
