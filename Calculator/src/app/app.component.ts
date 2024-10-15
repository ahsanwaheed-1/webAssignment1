import { Component } from '@angular/core';
import { CalculatorSiteComponent } from "./calculator-site/calculator-site.component";
//import { CalculatePipe } from "./calculate.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorSiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
}
