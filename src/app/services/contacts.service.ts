import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  getContacts(){
    return [
      {id: "1", name: "contact1", tel: "06777777", email: "email@tr.com"},
      {id: "2", name: "contact2", tel: "06767907", email: "email@td.com"},
      {id: "3", name: "contact3", tel: "06687777", email: "email@th.com"},
      {id: "4", name: "contact4", tel: "06097777", email: "email@tf.com"}
    ]
  }

  constructor() { }
}
