import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TEMPLATE_POOL_REPOSITORY, TemplatePoolService} from './template-pool.service';
import {AbstractTemplateRepository} from './abstract-template-repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TemplatePoolModule {
  static forRoot<R extends AbstractTemplateRepository>(
    repositoryComponent: Type<R>
  ): ModuleWithProviders<TemplatePoolModule> {
    return {
      ngModule: TemplatePoolModule,
      providers: [
        TemplatePoolService,
        {
          provide: TEMPLATE_POOL_REPOSITORY,
          useValue: repositoryComponent,
        }
      ],
    };
  }

  static forChild<R extends AbstractTemplateRepository>(
    repositoryComponent: Type<R>
  ): ModuleWithProviders<TemplatePoolModule> {
    return this.forRoot(repositoryComponent);
  }
}
