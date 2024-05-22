export interface FormElementBase {
    title: string;
    key: string;
    type: string;
  }
  
  export interface TextElement extends FormElementBase {
    type: 'text';
  }
  
  export interface CheckboxElement extends FormElementBase {
    type: 'checkbox';
    items: string[];
  }
  
  export interface DropdownElement extends FormElementBase {
    type: 'dropdown';
    items: string[];
  }
  
  export type FormElement = TextElement | CheckboxElement | DropdownElement;