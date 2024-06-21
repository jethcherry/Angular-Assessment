import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaikativeDirectiveDirective } from './Directives/taikative-directive.directive';
import { WheelComponentComponent } from './Components/wheel-component/wheel-component.component';
import {  errorMessage } from './Pipes/error-message.pipe';
import { PlaceholderComponent } from './Components/placeholder/placeholder.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TaikativeDirectiveDirective,WheelComponentComponent,errorMessage,PlaceholderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assessment';
}
