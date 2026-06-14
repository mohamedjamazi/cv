import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  experiences = [
    {
      role: 'Stagiaire – Département Informatique',
      company: 'STAR Assurances',
      location: 'Tunisie',
      period: 'Fév. 2026 – Avr. 2026',
      bullets: [
        'Stage de 3 mois au sein du département informatique d\'une compagnie d\'assurance majeure.',
        'Participation aux activités liées aux systèmes d\'information et à la gestion des données.',
        'Développement d\'une plateforme web complète pour la digitalisation des activités de l\'Amicale (PFE).',
      ]
    },
    {
      role: 'Stagiaire – Opérations de Détail',
      company: 'Mg Maxi Ennasr (Société Magasin Général)',
      location: 'Ariana, Tunisie',
      period: 'Juin – Juil. 2024',
      bullets: [
        'Assistance dans la gestion des stocks et la réception des marchandises, veillant à la précision de l\'inventaire.',
        'Participation aux opérations comptables et de caisse, découvrant les processus financiers d\'une grande surface.',
        'Contribution à l\'organisation du rayon et au service client, améliorant la satisfaction des clients.',
        'Observation des processus de gestion des ressources humaines et des opérations globales.',
      ]
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
