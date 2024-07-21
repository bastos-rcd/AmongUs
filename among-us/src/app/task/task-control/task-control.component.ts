import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.css']
})

export class TaskControlComponent {

  public readonly tasksName: string[] = [
    'Électricité',
  ];
  public numTask: number = 0;
  public playerName: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {
    this.numTask = this.route.snapshot.params['num'] as number;
    this.playerName = this.route.snapshot.params['player'] as string;
  }

}