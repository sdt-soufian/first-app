import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private title = "Liste des contacts";
  date= new Date(2021, 5, 24);
  montant = 450;
  testpipe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus quia unde ut quas vitae, sequi incidunt quos rerum ab tempora nostrum eos, id ea obcaecati cupiditate laudantium quisquam quis.";
  info = ['nom', 'telephone', 'email', ' '];
  contacts = ['contact1', 'contact2', 'contact3', 'contact4'];
  contact2 = [
    {id: "1", name: "contact1", tel: "06777777", email: "email@tr.com"},
    {id: "2", name: "contact2", tel: "06767907", email: "email@td.com"},
    {id: "3", name: "contact3", tel: "06687777", email: "email@th.com"},
    {id: "4", name: "contact4", tel: "06097777", email: "email@tf.com"}
  ]


  constructor() { }

  ngOnInit(): void {
  }
  getTitle(){
    return this.title;
  }

}
