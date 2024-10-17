import { Component } from '@angular/core';
import { CalculatorSiteComponent } from "./calculator-site/calculator-site.component";
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

//import { CalculatePipe } from "./calculate.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorSiteComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
}
