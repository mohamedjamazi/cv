import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;
  @ViewChildren('bar') bars!: QueryList<ElementRef>;

  technical = [
    { name: 'Java / JEE', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL / Bases de données', level: 80 },
    { name: 'HTML / CSS / JavaScript', level: 85 },
    { name: 'C# / .NET', level: 60 },
  ];

  tools = [
    'Angular', 'Spring Boot', 'MySQL', 'PHP', 'Bootstrap',
    'Git', 'Maven', 'H2', 'ERP', 'Business Intelligence',
    'Big Data', 'Cloud Computing', 'Scrum', 'UML',
  ];

  soft = [
    'Travail en équipe', 'Gestion de projets', 'Résolution de problèmes',
    'Adaptabilité', 'Communication', 'Curiosité intellectuelle',
    'Marketing digital', 'Analyse de données',
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const fill = (e.target as HTMLElement).querySelector('.bar-fill') as HTMLElement;
          if (fill) fill.style.width = fill.dataset['level'] + '%';
        }
      });
    }, { threshold: 0.15 });

    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
