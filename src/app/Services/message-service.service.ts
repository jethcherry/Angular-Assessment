import { Injectable } from '@angular/core';
import { Message } from '../Models/Message';
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }
  private messages:Message[]=[
    {
      Id:1,
      Description:"Hey Jane,i have the email.I will be there for the interview next morning"
    },
    {
      Id:2,
      Description:"Los angeles is nice place to be,i once had a nice burger there"
    },
    {
      Id:3,
      Description:"Angular is a cool Frontend framework to learn it has a lot of things to make your application nice and user-friendly"
    },
    {
      Id:4,
      Description:"I miss going home just eating what my mother cooks"
    },
    {
      Id:5,
      Description:"Once iam have enough money i want to spend the part of my life just travelling"
    },
    {
      Id:6,
      Description:"Jethro likes to work on his projects,he is so determined"
    },
    {
      Id:7,
      Description:"The Teach2Give cohort is one of the interactive cohorts i have ever experienced,i want finsh the cohort and gain a lot of skills"
    },
  ]

  getMessage():Message{
    return this.messages[Math.floor(Math.random() * this.messages.length)]

  }
}
