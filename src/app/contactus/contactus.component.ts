import { Component, OnInit } from '@angular/core';

export class ContactUsInformation
{
    name: string;
    email: string;
    message: string;
}
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactData: ContactUsInformation;
  constructor() { }

  ngOnInit(): void 
  {
    this.contactData =
    {
      name: "",
      email: "",
      message: ""
    };
  }

  onSubmit(): void{
    
  }
}
