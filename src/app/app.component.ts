import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GenerateComponent} from "./comps/generate/generate.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {PasswordListComponent} from "./comps/password-list/password-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerateComponent, MatSlider, MatSliderThumb, PasswordListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pasgen-ui';
}
