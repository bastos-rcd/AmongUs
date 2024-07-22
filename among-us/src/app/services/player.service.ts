import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Player } from '../model/player';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  private db = getFirestore(initializeApp(environment.firebase));

  constructor() { }

  async getAllPlayers(): Promise<Player[]> {
    const playerSnapshot = await getDocs(collection(this.db, 'players'));
    const players = playerSnapshot.docs.map(doc => doc.data());
    return players as Player[];
  }

  async getPlayer(name: string): Promise<Player> {
    const players = await this.getAllPlayers();
    for (let player of players) {
      if (player.name === name) {
        return player;
      }
    }
    return new Player();
  }

  async getImpostors(): Promise<string[]> {
    const players = await this.getAllPlayers();
    return players.filter(player => player.role).map(player => player.name);
  }

  async removeTask(playerName: string, taskNum: number): Promise<void> {
    const player = await this.getPlayer(playerName);
    player.tasks = player.tasks.filter(task => task != taskNum);
    const playerRef = doc(this.db, 'players', player.name);
    console.log(player.tasks);
    await updateDoc(playerRef, { tasks: player.tasks });
  }

}