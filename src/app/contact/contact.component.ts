import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IContact{
  id: string,
  name: string,
  tel: string,
  email: string,
}
interface IUser{
  username: string,
  password: string,
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  MyFormGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
    name: new FormControl()
  })

  userFormGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })

  private title = "Liste des contacts";
  date= new Date(2021, 5, 24);
  montant = 450;
  testpipe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus quia unde ut quas vitae, sequi incidunt quos rerum ab tempora nostrum eos, id ea obcaecati cupiditate laudantium quisquam quis.";
  email: string = ' ';
  name: string = ' ';
  tel: string = ' ';
  //user variable init
  username: string = ' ';
  password: string = ' ';
  isError : boolean = false;
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

  toggleAdd(){
    const contact: IContact = {
      id:( Math.floor(Math.random()*1000)).toString(),
      name: "contact 6",
      tel: "06759987",
      email: "cont@gmail.fr"
    } 
    this.contact2.push(contact)
    
  }

  Delete(contact: IContact){
    this.contact2 = this.contact2.filter((item) => {
      return item.id !== contact.id;
    })
  }

  Edit(contact: IContact){
    console.log(`ID : ${contact.id} tele : ${contact.tel} Email : ${contact.email}`)
  }

  Submit(){
    const contactYes = this.contact2.filter((item) =>{
      return item.name === this.name;
    })
    if(contactYes.length > 0) {
      console.log("contactYes.length=", contactYes);
      this.isError = true;
    }
    else {
      this.isError = false;
      const contact: IContact = {
        id:( Math.floor(Math.random()*100)).toString(),
        email: this.MyFormGroup.value.email,
        name: this.MyFormGroup.value.name,
        tel: this.MyFormGroup.value.phone,
      }
      this.contact2.push(contact);
    }
  }
  UserAdd(){
    console.log(this.userFormGroup.value)
  }
}
  

