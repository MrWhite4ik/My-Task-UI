import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { FormElement } from './form-element.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormService } from './form.service/form.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldComponent,
    CheckboxFieldComponent,
    DropdownFieldComponent,
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

  constructor(
    private fb: FormBuilder,
    private formService: FormService 
  ) {}

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
    if (this.form.valid) {
      const formData = {
        name: 'Simple Form',
        key: uuidv4(), // Generate a unique key
        elements: this.formElements.map(element => ({
          title: element.title,
          key: element.key,
          value: this.form.get(element.key)?.value
        }))
      };
      this.formService.submitForm(formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          this.form.reset();
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}