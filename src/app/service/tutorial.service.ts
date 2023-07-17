import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../api/tutorial';

const baseUrl = 'http://localhost:8081/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(id: any ,data: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/${id}`, data);
  }

  update(tutorial: Tutorial): Observable<any> {
    const url = `${baseUrl}/${tutorial.id}`;
    return this.http.put(url, tutorial);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }

}
