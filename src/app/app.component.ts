import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { FormElement } from './form-element.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldComponent,
    CheckboxFieldComponent,
    DropdownFieldComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  formElements: FormElement[] = [
    { title: 'Name', key: 'name', type: 'text' },
    { title: 'Fruits', key: 'fruits', type: 'checkbox', items: ['Apple', 'Pear', 'Orange'] },
    { title: 'Cars', key: 'cars', type: 'dropdown', items: ['Volvo', 'Seat', 'Fiat'] }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const formControls = this.formElements.reduce((acc, element) => {
      acc[element.key] = new FormControl('');
      return acc;
    }, {} as { [key: string]: FormControl });

    this.form = this.fb.group(formControls);
  }

  getFormControl(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  submit() {
    console.log(this.form.value);
    // Add code to send form data to the server
  }
}