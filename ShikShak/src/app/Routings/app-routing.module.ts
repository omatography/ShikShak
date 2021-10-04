import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { CoursesViewComponent } from '../Components/courses-view/courses-view.component';


const routes: Routes = [
  { path: '',pathMatch: "full", component: HomeComponent },
  {path:'courseview',component:CoursesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
