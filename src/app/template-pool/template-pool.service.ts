import {ComponentFactoryResolver, Inject, Injectable, InjectionToken, Injector, Type} from '@angular/core';
import {AbstractTemplateRepository, TemplatePool} from './abstract-template-repository';

export const TEMPLATE_POOL_REPOSITORY = new InjectionToken('template pool repository class');

/**
 * Template Pools are an implementation of OOP Flyweight pattern for Angular Templates,
 * allowing you to easily share <ng-template>s across a variety of components.
 * Without performance overhead. Without code duplication. Without race conditions. Super Cool!
 *
 * P.S. Should be provided AND initialized with a pool component on per-injector basis in
 *      NgModule#providers. That means: Once for Root Module or its non-lazy children OR
 *      Once for any lazy module and its non-lazy children.
 *      A repository is a component that extends AbstractTemplateRepository and contains ONLY:
 *      - <ng-template>s with template reference variables in HTML
 *      - @ViewChild('templateVar') xxxTemplate: TemplateRef<whatever>. The "[T|t]emplate"
 *         prefix/suffix is important as it is used when constructing the public pool accessible
 *         from TemplatePoolService#template$.
 */
@Injectable()
export class TemplatePoolService<P extends AbstractTemplateRepository> {
  get templates(): TemplatePool<P> {
    return this.templatePool.pool;
  }

  protected templatePool: P;

  constructor(
    @Inject(TEMPLATE_POOL_REPOSITORY) templatePoolComponent: Type<P>,
    protected injector: Injector,
    protected componentFactoryResolver: ComponentFactoryResolver,
  ) {
    if (!this.templatePool) {
      const poolFactory = this.componentFactoryResolver.resolveComponentFactory(templatePoolComponent);
      const componentRef = poolFactory.create(this.injector);
      componentRef.changeDetectorRef.detectChanges();
      this.templatePool = componentRef.instance;
    }
  }
}
