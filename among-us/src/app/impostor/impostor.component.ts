import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-impostor',
  templateUrl: './impostor.component.html',
  styleUrls: ['./impostor.component.css']
})

export class ImpostorComponent {

  public impostors: string[] = [];

  constructor(
    private playerService: PlayerService
  ) { }

  async ngOnInit() {
    this.impostors = await this.playerService.getImpostors();
  }

}