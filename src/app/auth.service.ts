import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

baseurl:any='http://localhost:5500/api/user'

registerUser(body:any): Observable<any>{
return this.http.post<any>(`${this.baseurl}/register`,body);
}

loginUser(body:any): Observable<any>{
  return this.http.post<any>(`${this.baseurl}/login`,body);
  }

addDeveloper(body:any):Observable<any>{
  return this.http.post<any>(`${this.baseurl}/addDeveloper`,body)
}

getDeveloper():Observable<any>{
  return this.http.get<any>(`${this.baseurl}/getDeveloper`)
}
viewDeveloperProfile(id:any):Observable<any>{
  return this.http.get<any>(`${this.baseurl}/getDeveloper/${id}`)
}

deleteDeveloperData(id:any):Observable<any>{
  return this.http.delete<any>(`${this.baseurl}/getDeveloper/${id}`)
}

contactData(body:any):Observable<any>{
  return this.http.post<any>(`${this.baseurl}/addContactDetail`,body)
}

getContactData():Observable<any>{
  return this.http.get<any>(`${this.baseurl}/getContacts`)
}
}
