import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CoursesViewComponent } from './Components/courses-view/courses-view.component';
import { CoursesEditComponent } from './Components/courses-edit/courses-edit.component';
import { AppRoutingModule } from './Routings/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoursesViewComponent,
    CoursesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
