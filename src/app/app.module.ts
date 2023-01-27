import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InitPageComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    ChartModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
