import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms"
import { RouterOutlet } from '@angular/router';
import {CustomNumberPipe} from "../calculate.pipe";

@Component({
  selector: 'app-calculator-site',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, CustomNumberPipe],
  templateUrl: './calculator-site.component.html',
  styleUrl: './calculator-site.component.css'
})
export class CalculatorSiteComponent {
  currentInput: string = '';
  operatorClicked: boolean = false;

  // Handle number button click
  numClick(event: Event) {
    const clickedNumber = (event.target as HTMLButtonElement).textContent;
    if (clickedNumber) {
      // If an operator was just clicked, add a space before the number
      if (this.operatorClicked) {
        this.currentInput += ' ' + clickedNumber;
        this.operatorClicked = false;  // Reset operator flag
      } else {
        this.currentInput += clickedNumber;  // Append number
      }
    }
  }

  // Handle operator button click
  opClick(event: Event) {
    const clickedOperator = (event.target as HTMLButtonElement).textContent;
    // Ensure that there's no consecutive operators and input is not empty
    if (clickedOperator && !this.operatorClicked && this.currentInput.length > 0) {
      if (clickedOperator === 'x') {
        // Replace 'x' with '*' for multiplication
        this.currentInput += ' *';
      } else {
        this.currentInput += ' ' + clickedOperator;
      }
      this.operatorClicked = true;  // Set operator flag to prevent consecutive operators
    }
  }

  // Perform calculation
  calculate() {
    try {
      // Evaluate the expression, removing any spaces
      this.currentInput = eval(this.currentInput.replace(/ /g, ''));
    } catch (error) {
      this.currentInput = 'Error';  // Handle invalid expressions
    }
  }

  del() {
    this.currentInput = this.currentInput.slice(0,-1);
  }
  // Clear the input
  clear() {
    this.currentInput = '';  // Reset the current input
    this.operatorClicked = false;  // Reset operator flag
  }
}
