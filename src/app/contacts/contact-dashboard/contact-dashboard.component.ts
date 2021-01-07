import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent implements OnInit {

  // public students = [
  //   {
  //     name:"toto"
  //   },
  //   {
  //     name:"tata"
  //   },
  //   {
  //     name:"titi"
  //   },
  // ]

  public contacts = [
    {
      id: 0,
      name:"Pierre",
      accept: false
    },
    {
      id :1,
      name:"Paul",
      accept: false
    },
    {
      id:2,
      name:"Jacques",
      accept: false
    },
  ]

  public title: string;
  public counter: number;

  constructor() { 
    
  }

  ngOnInit() {
    this.title = "Counter";
    this.counter = 0;
  }

  increment(): void {
    this.counter += 1;
  }

  delete(id: number) {
    this.contacts.splice(id, id + 1);
  }

  // delete(contact) :void {
  //   //this.contacts.splice(id, id + 1);
  //   this.contacts.slice(this.contacts.indexOf(contact),1);
  // }

  validate(contact): void {
    contact.accept=true;
  }

}
