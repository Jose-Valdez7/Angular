import { Injectable } from '@angular/core';
import { learning } from '../model/learning';
import { learningData } from '../data/learningData';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private course:learning=learningData;
  constructor() { }

  getCourse():learning{
    return this.course;
  }
}
