import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
    ]),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
