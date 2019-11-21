import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 

import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InMemoryDbService, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocks/in-memory-data-service';
import { TableLoginComponent } from './modules/table-login/table-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
