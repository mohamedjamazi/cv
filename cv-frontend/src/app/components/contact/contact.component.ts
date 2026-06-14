import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading = signal(false);
  toast = signal<{ type: 'success' | 'error'; msg: string } | null>(null);

  form = this.fb.nonNullable.group({
    nom:     ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    sujet:   ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  contacts = [
    { icon: 'mail',     label: 'Email',        value: 'mohamedjamazi16@gmail.com', href: 'mailto:mohamedjamazi16@gmail.com' },
    { icon: 'phone',    label: 'Téléphone',    value: '+216 28 564 961',           href: 'tel:+21628564961' },
    { icon: 'linkedin', label: 'LinkedIn',     value: 'linkedin.com/in/mohamedjamazi', href: 'https://linkedin.com/in/mohamedjamazi' },
    { icon: 'map-pin',  label: 'Localisation', value: 'Tunisie',                   href: '' },
  ];

  constructor(private fb: FormBuilder, private svc: ContactService) {}

  get f() { return this.form.controls; }

  isInvalid(field: keyof typeof this.form.controls) {
    const c = this.form.controls[field];
    return c.invalid && (c.dirty || c.touched);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.svc.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        this.form.reset();
        this.showToast('success', 'Votre message a été envoyé avec succès !');
      },
      error: () => {
        this.loading.set(false);
        this.showToast('error', 'Une erreur est survenue. Veuillez réessayer.');
      }
    });
  }

  private showToast(type: 'success' | 'error', msg: string) {
    this.toast.set({ type, msg });
    setTimeout(() => this.toast.set(null), 4000);
  }
}
