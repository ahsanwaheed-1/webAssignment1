import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatting',
  standalone: true  // Standalone pipe for use without a module
})
export class CustomNumberPipe implements PipeTransform {
  transform(value: string | number): string {
    // First, ensure the value is a valid number
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      return value.toString(); // Return the value as is if it's not a number
    }

    // Use Intl.NumberFormat to format the number with commas
    return new Intl.NumberFormat().format(numberValue);
  }
}
