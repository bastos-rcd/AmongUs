import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CrewmateComponent } from './crewmate/crewmate.component';
import { ImpostorComponent } from './impostor/impostor.component';
import { TaskControlComponent } from './task/task-control/task-control.component';
import { Task1Component } from './task/task-1/task-1.component';
import { Task2Component } from './task/task-2/task-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    CrewmateComponent,
    ImpostorComponent,
    TaskControlComponent,
    Task1Component,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }