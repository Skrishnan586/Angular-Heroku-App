import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhoneBook,InsertPhoneBook } from './phone-book.class';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(private http: HttpClient ) { }
  public findAll(): Observable<PhoneBook[]> {
   return this.http.get<PhoneBook[]>(`https://phonebook-ashokit.herokuapp.com/contacts`);
  }
  public saveContact(data:InsertPhoneBook): Observable<InsertPhoneBook> {
    return this.http.post<InsertPhoneBook>(`https://phonebook-ashokit.herokuapp.com/save`, data);
  }
  public fetchContactToUpdate(contactId:number) : Observable<InsertPhoneBook>{
    return this.http.get<InsertPhoneBook>(`https://phonebook-ashokit.herokuapp.com/edit/${contactId}`);
  }
  public deleteContact(contactId:number) : Observable<InsertPhoneBook>{
    return this.http.delete<InsertPhoneBook>(`https://phonebook-ashokit.herokuapp.com/delete/${contactId}`);
  }
}
