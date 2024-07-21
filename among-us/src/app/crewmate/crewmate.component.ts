import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crewmate',
  templateUrl: './crewmate.component.html',
  styleUrls: ['./crewmate.component.css']
})

export class CrewmateComponent {

  @Input() public tasks: number[] = [];
  @Input() public playerName: string = '';

  constructor() { }

}