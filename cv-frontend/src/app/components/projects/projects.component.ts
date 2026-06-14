import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  projects = [
    {
      title: 'Plateforme Amicale STAR Assurances',
      description: 'Plateforme web complète dédiée à la digitalisation des activités de l\'Amicale de STAR Assurances. Gestion des événements, inscriptions, élections et sondages avec système de rôles.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'JPA', 'Scrum'],
      period: 'Fév. – Mai 2026',
      github: '',
      demo: '',
      icon: 'building'
    },
    {
      title: 'Esenien Fitness',
      description: 'Site e-commerce complet dédié à la vente de produits de nutrition sportive. Système de panier, commande COD, panneau d\'administration et architecture sécurisée.',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
      period: 'Mars – Mai 2025',
      github: '',
      demo: '',
      icon: 'dumbbell'
    },
    {
      title: 'CV Portfolio Personnel',
      description: 'Site portfolio moderne et responsive présentant mon parcours académique, mes compétences et mes projets. Construit avec Angular 17 standalone et Spring Boot 3.',
      tech: ['Angular 17', 'Spring Boot', 'SCSS', 'H2', 'REST API'],
      period: '2026',
      github: '',
      demo: '',
      icon: 'layout'
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
