import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { DatePipe } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from  '@angular/common/http';
import { ExperienceComponent } from './resume-components/experience/experience.component';
import { EducationComponent } from './resume-components/education/education.component';
import { SkillsComponent } from './resume-components/skills/skills.component';
import { LanguagesComponent } from './resume-components/languages/languages.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
