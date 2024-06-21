import { Component } from '@angular/core';
import { Placeholder } from '../../Models/ErrorMessages';
import { CommonModule } from '@angular/common';
import { ErrorMessage } from '../../Pipes/error-message.pipe';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule, ErrorMessage], // Add the pipe to the imports array
  template: `
    <p [ngStyle]="{'color': isEmpty? '#ccc' : ''}">
      {{ model.text | errorMessage: model }}
    </p>
  `,
  styleUrls: ['./placeholder.component.css'] // Note the '' in styleUrls
})
export class PlaceholderComponent {
  @Input() model: Placeholder;

  get isEmpty(): boolean {
    return!this.model.text || this.model.text.length < (this.model.minLength?? 0);
  }
}