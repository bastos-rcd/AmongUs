import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.css']
})

export class Task1Component {

  public code: string = '';
  public readonly codeToFind: number = Math.floor(Math.random() * 10000);
  public isValidate: boolean = false;

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

  public onValidate(): void {
    if (parseInt(this.code) == this.codeToFind) {
      this.isValidate = true;
      this.playerService.removeTask(this.playerName, this.numTask).then(() => { });
      this.gameService.updateTaskDone().then(() => { });
    }
  }

}