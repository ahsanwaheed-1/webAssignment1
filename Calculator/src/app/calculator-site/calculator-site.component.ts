import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup,FormControl, ReactiveFormsModule, FormsModule} from "@angular/forms"
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calculator-site',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './calculator-site.component.html',
  styleUrl: './calculator-site.component.css'
})
export class CalculatorSiteComponent {
  inputStr: any;

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    })
  }

  buttonClick(buttonElement:any){
    let buttonText = buttonElement.textContent;
    this.inputStr.controls.text.setValue(buttonText)
  }
}
