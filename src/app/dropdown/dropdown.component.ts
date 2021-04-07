import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

export interface DropdownItem {
  id: string;
  label: string;
  customData?: Record<string, any>;
}

export interface CustomItemTemplateContext {
  $implicit: {
    item: DropdownItem,
  };
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  @Input()
  label: string;
  @Input()
  items: DropdownItem[] = [];
  @Input()
  customItemTemplate: TemplateRef<CustomItemTemplateContext>;
  @Output()
  itemSelected = new EventEmitter<DropdownItem>();

  itemClicked($event: MouseEvent, item: DropdownItem): void {
    $event.preventDefault();

    this.itemSelected.emit(item);
  }
}
