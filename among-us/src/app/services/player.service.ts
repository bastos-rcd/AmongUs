import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Player } from '../model/player';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
}