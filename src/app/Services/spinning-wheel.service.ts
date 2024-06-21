import { Injectable } from '@angular/core';
import { Wheel } from '../Models/Wheel';

@Injectable({
  providedIn: 'root'
})
export class SpinningWheelService {

  private wheels: Wheel[] = [
    {
      Id: 1,
      Description: "Prize 1"
    },
    {
      Id: 1,
      Description: "Prize 1"
    },
    {
      Id: 2,
      Description: "Prize 2"
    },
    {
      Id: 3,
      Description: "Bonus"
    },
    {
      Id: 4,
      Description: "Try again"
    }
  ];

  getWheel(): Wheel {
    const randomIndex = Math.floor(Math.random() * this.wheels.length);
    return this.wheels[randomIndex];
  }

  extraSpin(wheel: Wheel): boolean {
    return wheel.Description === 'Try Again';
  }

  givePrize(wheel: Wheel): string {
    if (wheel.Description === 'Try Again') {
      return 'You can get an extra spin';
    } else {
      return `You won ${wheel.Description}`;
    }
  }
}