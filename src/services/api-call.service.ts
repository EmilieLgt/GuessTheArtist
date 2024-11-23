import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  token!: string;
  getAccessToken(): Observable<any> {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // définir les données du corps de la requête
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: '...',
      client_secret: '...',
    });

    // appel POST pour récupérer le token
    return this.http.post(url, body.toString(), { headers }).pipe(
      tap((data: any) => {
        this.token = data.access_token;
        console.log('Access Token:', this.token);
      })
    );
  }

  getArtists() {
    if (!this.token) {
      this.getAccessToken().subscribe(() => this.fetchArtistDetails());
    } else {
      this.fetchArtistDetails();
    }
  }
  private fetchArtistDetails() {
    const url = 'https://api.spotify.com/v1/me';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
    });
  }
}
