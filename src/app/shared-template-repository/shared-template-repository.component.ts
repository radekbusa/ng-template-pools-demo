/* tslint:disable:component-class-suffix */
import {Component, TemplateRef, ViewChild} from '@angular/core';
import {CustomItemTemplateContext} from '../dropdown/dropdown.component';
import {AbstractTemplateRepository} from '../template-pool/abstract-template-repository';

@Component({
  templateUrl: './shared-template-repository.component.html',
})
export class SharedTemplateRepository extends AbstractTemplateRepository {
  // each new template should have prefix/suffix "template".
  @ViewChild('countryItemTemplate')
  countryItemTemplate: TemplateRef<CustomItemTemplateContext>;

  // More TemplateRefs similar to the top one can be added here.
  // Just remember, the repository should be a stateless component!
}
