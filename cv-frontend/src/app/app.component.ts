import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }    from './components/navbar/navbar.component';
import { HeroComponent }      from './components/hero/hero.component';
import { AboutComponent }     from './components/about/about.component';
import { SkillsComponent }    from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent }  from './components/projects/projects.component';
import { ContactComponent }   from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
