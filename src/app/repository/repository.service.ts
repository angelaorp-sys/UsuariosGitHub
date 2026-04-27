import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from './repository';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUrl: string = environment.baseUrl + 'repositories.json';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl);
  }

  getRepositoriesByOwner(ownerId: number): Observable<Repository[]> {
    return this.getRepositories().pipe(
      map(repos => repos.filter(repo => repo.ownerId === ownerId))
    );
  }

}
