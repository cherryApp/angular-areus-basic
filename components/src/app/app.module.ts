import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
registerLocaleData(localeHu);

import { AppComponent } from './app.component';
import { HeroListComponent } from './common/hero-list/hero-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    DataTableComponent,
    XPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
