import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { CoursesViewComponent } from '../Components/courses-view/courses-view.component';
import { CoursesEditComponent } from '../Components/courses-edit/courses-edit.component';


const routes: Routes = [
  { path: '',pathMatch: "full", component: HomeComponent },
  {path:'courseview',component:CoursesViewComponent},
  {path:'courseedit/:id',component:CoursesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
