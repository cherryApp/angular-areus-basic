import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { AboutComponent } from './page/about/about.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataAccessModule } from './data-access/data-access.module';
import { LoginComponent } from './page/login/login.component';
import { AreusFormModule } from './areus-form/areus-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserEditComponent,
    AboutComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataAccessModule,
    FormsModule,
    ReactiveFormsModule,
    AreusFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
