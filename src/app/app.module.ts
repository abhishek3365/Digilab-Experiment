import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmazingTimePickerModule } from 'amazing-time-picker';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DigilabComponent } from './digilab/digilab.component';
import { SessionsComponent } from './sessions/sessions.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DigilabItemComponent } from './digilab/digilab-item/digilab-item.component';
import { DigilabListComponent } from './digilab/digilab-list/digilab-list.component';
import { DigilabEditComponent } from './digilab/digilab-edit/digilab-edit.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    DigilabComponent,
    SessionsComponent,
    AboutComponent,
    DigilabItemComponent,
    DigilabListComponent,
    DigilabEditComponent,
    SessionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AmazingTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
