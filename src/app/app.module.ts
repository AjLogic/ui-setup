import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ClientWizardComponent } from './components/client-wizard/client-wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LayoutComponent,
    BreadcrumbsComponent,
    ClientWizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
