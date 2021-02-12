import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';

import Course from './course';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor (
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
  ) {  }

  ngOnInit() {
    this.retrieveById();
  }

  retrieveById() {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: (course) => this.course = course,
      error: (err) => console.error("Error: ", err),
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      error: (err) => console.error(err),
    });
  }
}
