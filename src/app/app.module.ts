import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersTableIcons } from './components/icons.components';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomersTableIcons, CustomerPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
