import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { TaskControlComponent } from './task/task-control/task-control.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player/:name', component: PlayerComponent },
  { path: 'task/:num/:player', component: TaskControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }