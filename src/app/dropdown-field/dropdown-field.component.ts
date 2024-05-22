import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent {
 @Input() title!: string;
 @Input() items!: string[];
 @Input() control!: FormControl;
}
