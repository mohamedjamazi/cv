import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  education = [
    {
      degree: 'Licence en Informatique de Gestion (Business Computing)',
      institution: 'École Supérieure d\'Économie Numérique (ESEN)',
      location: 'Manouba, Tunisie',
      period: '2023 – 2026',
      description: 'Formation spécialisée en systèmes d\'information de gestion, développement logiciel, ERP, Business Intelligence et gestion de projets informatiques.',
      icon: 'graduation'
    },
    {
      degree: 'Responsive Web Design',
      institution: 'freeCodeCamp',
      location: 'En ligne',
      period: '2024',
      description: 'Certification couvrant HTML5, CSS3, accessibilité web et principes de design responsive. ID: mohamedjamazi-rwd',
      icon: 'certificate'
    },
    {
      degree: 'Intermediate SQL',
      institution: 'DataCamp',
      location: 'En ligne',
      period: '2024',
      description: 'Maîtrise des requêtes SQL avancées, jointures, sous-requêtes et agrégations pour l\'analyse de données.',
      icon: 'certificate'
    },
    {
      degree: 'Introduction to Python',
      institution: 'DataCamp',
      location: 'En ligne',
      period: '2024',
      description: 'Fondamentaux du langage Python : structures de données, fonctions, manipulation de fichiers et introduction à NumPy.',
      icon: 'certificate'
    },
    {
      degree: 'Introduction to OOP in Java',
      institution: 'DataCamp',
      location: 'En ligne',
      period: '2024',
      description: 'Programmation orientée objet avec Java : classes, héritage, polymorphisme et encapsulation.',
      icon: 'certificate'
    },
    {
      degree: 'Build & Engage Your Network on LinkedIn',
      institution: 'Coursera',
      location: 'En ligne',
      period: '2024',
      description: 'Stratégies de développement professionnel et de networking sur LinkedIn. ID: QUKPCWHNNM16',
      icon: 'certificate'
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
