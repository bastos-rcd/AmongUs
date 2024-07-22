import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Game } from '../model/game';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private db = getFirestore(initializeApp(environment.firebase));

  constructor() { }

  async updateTaskDone(): Promise<void> {
    const gameSnapshot = await getDocs(collection(this.db, 'game'));
    const game = gameSnapshot.docs.map(doc => doc.data())[0] as Game;
    const gameRef = doc(this.db, 'game', 'game');
    await updateDoc(gameRef, { done: game.done + 1 });
  }

}