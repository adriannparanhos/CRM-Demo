import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormDef } from './models/FormDef';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent implements OnInit, OnChanges { 
  @Input() fields: FormDef[] = [];
  @Input() initialData: any = null; 
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['initialData'] || changes['fields']) && this.form) {
      this.buildForm();
    }
  }

  private buildForm(): void {
    const formControls: { [key: string]: any } = {};
    
    if (!this.fields || this.fields.length === 0) {
      return;
    }

    this.fields
      .filter(field => field.isFormField !== false)
      .forEach(field => {
        const value = this.initialData ? this.initialData[field.key] : (field.initialValue || '');
        formControls[field.key] = [value, field.validators || []];
      });

    this.form = this.fb.group(formControls);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}