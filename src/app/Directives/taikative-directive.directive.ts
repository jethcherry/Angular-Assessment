import { Directive, ElementRef } from '@angular/core';
import { MessageServiceService } from '../Services/message-service.service';

@Directive({
  selector: '[appTaikativeDirective]',
  standalone: true
})
export class TaikativeDirectiveDirective {

  constructor(private elementRef: ElementRef,private messageService:MessageServiceService) { }
  ngAfterViewInit():void{
    this.elementRef.nativeElement.addEventListener('click',()=>{
      const randomMsg = this.messageService.getMessage()
      const message = document.getElementById('message')
      if (message) {
        message!.textContent = randomMsg.Description
      }

    })
  }

}
