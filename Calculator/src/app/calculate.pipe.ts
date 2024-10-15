import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate',
  standalone: true
})
export class CalculatePipe implements PipeTransform {

  transform(value: string): any {
    try {
      // Replace 'x' with '*' for multiplication
      const sanitizedValue = value.replace(/x/g, '*');
      return eval(sanitizedValue);
    } catch (e) {
      return 'Error';  // Return 'Error' if evaluation fails
    }
  }

}
