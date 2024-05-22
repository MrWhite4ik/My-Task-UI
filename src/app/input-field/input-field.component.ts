import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
@Input() title!: string;
@Input() control!: FormControl;
}
