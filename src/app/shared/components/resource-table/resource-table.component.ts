import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ColumnDef } from './models/ColumnDef';
import { ActionDef } from './models/ActionDef';

@Component({
  selector: 'app-resource-table',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './resource-table.component.html',
  styleUrl: './resource-table.component.scss'
})
export class ResourceTableComponent<T> {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = '';
  @Input() searchPlaceholder: string = '';

  @Input() columns: ColumnDef[] = [];
  @Input() data: T[] = [];
  @Input() actions: ActionDef[] = [];

  @Output() buttonClick = new EventEmitter<void>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() actionClick = new EventEmitter<{ actionId: string, item: T }>();

  getProperty(item: T, key: string): any {
    return key.split('.').reduce((o, i) => (o as any)[i], item);
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input) {
      this.searchChange.emit(input.value);
    }
  }
}
