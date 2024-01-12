import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { StrikeDirective } from './strike.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ListComponent,
    TaskComponent,
    StrikeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
