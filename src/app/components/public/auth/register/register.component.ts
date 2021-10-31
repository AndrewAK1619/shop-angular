import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // ---  1.0 - Poniżej przykład co trzeba dodać aby móc dodać style ---
  // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  formGroup = new FormGroup({})
  formFields: FormlyFieldConfig[] = [
    {
      key: "firstName",
      type: "input",
      // ---  1.0 - Poniżej przykład co trzeba dodać aby móc dodać style ---
      // className: 
      templateOptions: {
        label: "First Name",
        placeholder: "Enter first name",
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
      key: "lastName",
      type: "input",
      templateOptions: {
        label: "Last Name",
        placeholder: "Enter last name",
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
      key: "birthDate",
      type: "datepicker",
      templateOptions: {
        label: "Birth Date",
        placeholder: "Enter birth date",
        required: true
      },
      validation: {
        messages: {
          required: (error, field) => "Value is required"
        }
      }
    },
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email",
        placeholder: "Enter email",
        required: true
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
        required: true
      },
      validation: {
        messages: {
          required: (error, field) => "Value is required",
          maxLength: (error, field) => "Lenght should be less then 255"
        }
      }
    },
    {
      key: "confirmPassword",
      type: "input",
      templateOptions: {
        label: "Confirm Password",
        placeholder: "Enter confirm password",
        required: true
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
