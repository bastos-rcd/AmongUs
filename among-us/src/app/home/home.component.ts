import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public playerName: string = '';
  private allPlayers: Player[] = [];

  public isNotValid: boolean = false;

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.playerService.getAllPlayers().then((players) => {
      for (let player of players) {
        this.allPlayers.push(player);
      }
    });
  }

  public onPlay(): void {
    if (this.allPlayers.find(player => player.name === this.playerName)) {
      this.isNotValid = false;
    }
    else {
      this.isNotValid = true;
    }
  }
}