import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../model/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent {

  public player: Player = new Player();
  public showRole: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  async ngOnInit() {
    this.player = await this.playerService.getPlayer(this.route.snapshot.paramMap.get('name')!);
  }

  public onShowRole(): void {
    this.showRole = !this.showRole;
  }

}