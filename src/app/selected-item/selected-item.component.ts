import {Component, Input} from '@angular/core';
import {DropdownItem} from '../dropdown/dropdown.component';
import {TemplatePoolService} from '../template-pool/template-pool.service';
import {SharedTemplateRepository} from '../shared-template-repository/shared-template-repository.component';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html'
})
export class SelectedItemComponent {
  @Input()
  selectedItem: DropdownItem = null;

  constructor(
    // public - accessed from the template
    public templatePool: TemplatePoolService<SharedTemplateRepository>,
  ) {}
}
