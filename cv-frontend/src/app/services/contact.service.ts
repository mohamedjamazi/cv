import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactPayload {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly api = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.api, payload);
  }
}
