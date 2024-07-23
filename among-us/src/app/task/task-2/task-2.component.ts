import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.css']
})

export class Task2Component {

  public isOn: boolean = false;

  public playerName: string = '';
  private numTask: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private gameService: GameService
  ) {
    this.playerName = this.route.snapshot.params['player'] as string;
    this.numTask = this.route.snapshot.params['num'] as number;
  }

  public onSwitch(): void {
    this.isOn = !this.isOn;
    this.playerService.removeTask(this.playerName, this.numTask).then(() => { });
    this.gameService.updateTaskDone().then(() => { });
  }

}