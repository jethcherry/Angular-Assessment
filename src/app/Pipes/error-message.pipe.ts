
import { Pipe, PipeTransform } from '@angular/core';
import { Placeholder } from '../Models/ErrorMessages';

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class errorMessage implements PipeTransform {
  transform(value: string, model: Placeholder): string {
    if (!value || value.length < (model.minLength ?? 0)) {
      return model.placeholder;
    }
    return value;
  }
}
