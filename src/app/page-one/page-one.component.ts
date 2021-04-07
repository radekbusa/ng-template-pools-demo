import {Component} from '@angular/core';
import {DropdownItem} from '../dropdown/dropdown.component';
import {TemplatePoolService} from '../template-pool/template-pool.service';
import {SharedTemplateRepository} from '../shared-template-repository/shared-template-repository.component';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent {
  selectedItem: DropdownItem = null;
  items: DropdownItem[] = [
    {
      id: 'de',
      label: 'Germany',
      customData: {
        region: 'Western Europe',
      }
    },
    {
      id: 'fr',
      label: 'France',
      customData: {
        region: 'Western Europe',
      }
    },
    {
      id: 'cz',
      label: 'Czechia',
      customData: {
        region: 'Eastern Europe',
      }
    },
  ];

  constructor(
    // public - accessed from the template
    public templatePool: TemplatePoolService<SharedTemplateRepository>,
  ) {}

  itemSelected($event: DropdownItem): void {
    this.selectedItem = $event;
  }
}
