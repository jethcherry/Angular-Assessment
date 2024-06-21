import { Component, Input } from '@angular/core';
import { Placeholder } from '../../Models/ErrorMessages';
import { CommonModule } from '@angular/common';
import { errorMessage } from '../../Pipes/error-message.pipe';



@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule,errorMessage], 
  templateUrl: "./placeholder.component.html",
  styleUrls: ['./placeholder.component.css'] 
})
export class PlaceholderComponent {
  @Input() model: Placeholder = { text: '', placeholder: '', minLength: 0 };

  get isEmpty(): boolean {
    return !this.model.text || this.model.text.length < (this.model.minLength ?? 0);
  }
}