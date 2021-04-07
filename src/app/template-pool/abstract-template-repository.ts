/* tslint:disable:directive-class-suffix */
import {AfterViewInit, Directive, TemplateRef} from '@angular/core';

// R ... Repository type
type JustTemplateKeys<R> = ({[K in keyof R]: R[K] extends TemplateRef<any> ? K : never })[keyof R];
export type TemplatePool<R> = Pick<R, Exclude<JustTemplateKeys<R>, 'pool'>>;

@Directive() // template-less abstract Components are Directives
export abstract class AbstractTemplateRepository implements AfterViewInit {
  pool: any = {}; // Record<string with [T|t]emplate prefix/suffix, TemplateRef<any>>

  // Initialization occurs here and not in the constructor
  // because `this` must also contain properties of eventual subclass.
  ngAfterViewInit(): void {
    for (const propertyName of Object.keys(this)) {
      if (propertyName.toLowerCase().includes('template')) {
        // @ts-ignore
        this.pool[propertyName] = this[propertyName];
      }
    }
  }
}
