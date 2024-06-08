import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GenerateComponent} from "./comps/generate/generate.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, GenerateComponent, MatSlider, MatSliderThumb],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pasgen-ui';
}
