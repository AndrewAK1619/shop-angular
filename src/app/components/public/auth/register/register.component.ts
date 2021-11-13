import { RegisterUserAction } from './../state/user.actions';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // ---  1.0 - Poniżej przykład co trzeba dodać aby móc dodać style ---
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  formGroup = new FormGroup({})
  formFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div><strong>REGISTRATION:</strong></div><hr /><br />',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          key: "firstName",
          type: "input",
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
          className: 'col-6',
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
      ],
    },
    { template: '<br />' },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          key: "email",
          type: "input",
          templateOptions: {
            label: "Email",
            placeholder: "Enter email",
            required: true,
            type: "email"
          },
          validation: {
            messages: {
              required: (error, field) => "Value is required",
              maxLength: (error, field) => "Lenght should be less then 255"
            }
          }
        },
        {
          className: 'col-6',
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
      ],
    },
    { template: '<br />' },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          key: "password",
          type: "input",
          templateOptions: {
            label: "Password",
            placeholder: "Enter password",
            required: true,
            type: "password"
          },
          validation: {
            messages: {
              required: (error, field) => "Value is required",
              maxLength: (error, field) => "Lenght should be less then 255"
            }
          }
        },
        {
          className: 'col-6',
          key: "confirmPassword",
          type: "input",
          templateOptions: {
            label: "Confirm Password",
            placeholder: "Enter confirm password",
            required: true,
            type: "password"
          },
          validation: {
            messages: {
              required: (error, field) => "Value is required",
              maxLength: (error, field) => "Lenght should be less then 255"
            }
          }
        },
      ],
    },
    { template: '<br />' },
    { template: '<br />' },
  ];

  constructor(public readonly store: Store) { }

  ngOnInit(): void {
  }

  submit() {
    this.store.dispatch(new RegisterUserAction(this.formGroup.value))
  }
}
