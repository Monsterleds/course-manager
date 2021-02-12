import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { StarComponent } from './../shared/components/star/star.component';

import { AppPipeModule } from '../shared/pipe/app-pipe.module';

import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';

@NgModule({
  declarations: [
    StarComponent,
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    AppPipeModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ])
  ],
})
export class CourseModule {

}
