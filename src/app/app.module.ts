import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { LogListComponent } from './pages/log-list/log-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './common/modules/shared.module';
import { LOG_SERVICE_URL } from 'src/environments/environment';
import { LogListResultsComponent } from './pages/log-list/log-list-results/log-list-results.component';
import { FiltersComponent } from './components/layouts/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    LogListResultsComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'BASE_URL', useValue: LOG_SERVICE_URL },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
