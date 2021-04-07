import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedTemplateRepository} from './shared-template-repository/shared-template-repository.component';
import {PageOneComponent} from './page-one/page-one.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {SelectedItemComponent} from './selected-item/selected-item.component';
import {TemplatePoolModule} from './template-pool/template-pool.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedTemplateRepository,
    PageOneComponent,
    DropdownComponent,
    SelectedItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatePoolModule.forRoot(SharedTemplateRepository),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
