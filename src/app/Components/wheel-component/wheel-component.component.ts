import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpinningWheelService } from '../../Services/spinning-wheel.service';
import { Wheel } from '../../Models/Wheel';

@Component({
  selector: 'app-wheel-component',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button (click)="getWheel()" id="app"> Spin me!</button>
  <p *ngIf="wheel">{{wheel.Description}}</p>
  <p *ngIf="extraSpin">You get an extra spin</p>
  <p *ngIf="prize">{{prize}}</p>
  `,
  styleUrls: ['./wheel-component.component.css']
})
export class WheelComponentComponent implements OnInit {
  wheel!: Wheel;
  extraSpin: boolean = false;
  prize!: string;

  constructor(private wheelService: SpinningWheelService) { }

  ngOnInit(): void {
  }

  getWheel(): void {
    this.wheel = this.wheelService.getWheel();
    this.extraSpin = this.wheelService.extraSpin(this.wheel);
    this.prize = this.wheelService.givePrize(this.wheel);
  }
}