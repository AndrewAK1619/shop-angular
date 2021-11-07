import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({})
  formFields: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email",
        placeholder: "Enter email",
        required: true,
        maxLength: 255
      },
      validation: {
        messages: {
          required: (error, field) => "Value is required",
          maxLength: (error, field) => "Lenght should be less then 255"
        }
      }
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Password",
        placeholder: "Enter password",
        required: true,
        maxLength: 255
      },
      validation: {
        messages: {
          required: (error, field) => "Value is required",
          maxLength: (error, field) => "Lenght should be less then 255"
        }
      }
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
