import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-task-3',
  templateUrl: './task-3.component.html',
  styleUrls: ['./task-3.component.css']
})

export class Task3Component {
  public value1: number = 50;
  public value2: number = 50;
  public value3: number = 50;

  public readonly result1: number = Math.floor(Math.random() * 100);
  public readonly result2: number = Math.floor(Math.random() * 100);
  public readonly result3: number = Math.floor(Math.random() * 100);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private gameService: GameService
  ) { }

  public onValidate() {
    const playerName = this.route.snapshot.params['player'] as string;
    const numTask = this.route.snapshot.params['num'] as number;

    this.playerService.removeTask(playerName, numTask).then(() => { });
    this.gameService.updateTaskDone().then(() => { });

    this.router.navigateByUrl('/player/' + playerName);
  }

  onChangeValue1(event: Event): void {
    this.value1 = (event.target as HTMLInputElement).valueAsNumber;
  }

  onChangeValue2(event: Event): void {
    this.value2 = (event.target as HTMLInputElement).valueAsNumber;
  }

  onChangeValue3(event: Event): void {
    this.value3 = (event.target as HTMLInputElement).valueAsNumber;
  }
}