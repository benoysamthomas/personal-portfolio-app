import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes: Routes=[
  {path:'', redirectTo:"/about", pathMatch:"full" },
  { path:'about', component:AboutComponent },
  { path:'resume', component:ResumeComponent },
  { path:'projects', component:ProjectsComponent },
  { path:'contact', component:ContactComponent },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
