import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../api/type';
const baseUrl = 'http://localhost:8081/api/types';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl);
  }

  get(id: any): Observable<Type> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(baseUrl);
  }
  create(data: any, id_type: any): Observable<any> {
    return this.http.post( `http://localhost:8081/api/addTypeAndTutorial`, data, { params: { id_type } });
  }
  
 
  update(type: Type): Observable<any> {
    const url = `${baseUrl}/${type.id}`; // Replace with the update URL for the type in your backend
    return this.http.put(url, type);
  }

  findByNom(nom: any): Observable<Type[]> {
    return this.http.get<Type[]>(`${baseUrl}?nom=${nom}`);
  }


  
}
