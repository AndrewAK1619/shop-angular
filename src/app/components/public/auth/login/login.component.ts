import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { LoginUserAction } from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // ---  1.0 - Poniżej przykład co trzeba dodać aby móc dodać style ---
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({})
  formFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div><strong>LOG IN:</strong></div><hr /><br />',
    },
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
      ],
    },
    { template: '<br />' },
    { template: '<br />' },
  ];

  constructor(public readonly store: Store) { }

  ngOnInit(): void {
  }

  submit() {
    this.store.dispatch(new LoginUserAction(this.formGroup.value.email, this.formGroup.value.password));
  }
}
