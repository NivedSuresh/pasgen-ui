import {Component} from '@angular/core';
import {MatCard, MatCardHeader} from "@angular/material/card";
import {CommonModule, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PasgenService} from "../../services/pasgen.service";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {PasswordRequest} from "../../models/PasswordRequest.model";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatDialog} from "@angular/material/dialog";
import {SaveDialogComponent} from "../save-dialog/save-dialog.component";

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    NgOptimizedImage,
    NgIf,
    FormsModule,
    CommonModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatSlider,
    MatSliderThumb,
  ],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.css'
})
export class GenerateComponent {

  password: string;
  includeSpecialChars!: boolean;
  includeNumbers!: boolean;
  includeLowercase!: boolean;
  includeUppercase!: boolean;

  sliderValue: number = 20;
  sliderOpts = {
    floor: 0,
    ceil: 200
  }

  constructor(private pasgenService: PasgenService,
              private matDialog: MatDialog)
  {
    this.password = '';
    this.resetIncludeFields();
  }

  async generatePassword() {
    const req: PasswordRequest = {
      includeSpecialChars: this.includeSpecialChars,
      includeLowerCase: this.includeLowercase,
      includeNumbers: this.includeNumbers,
      includeUpperCase: this.includeUppercase,
      length: this.sliderValue
    }
    const password = await this.pasgenService.generatePassword(req);
    this.password = password.password;
  }

  copyPassword() {
    this.pasgenService.copyPassword(this.password);
    this.password = '';
  }

  private resetIncludeFields() {
    this.includeNumbers = true;
    this.includeLowercase = true;
    this.includeUppercase = true;
    this.includeSpecialChars = true;
    this.sliderValue = 20;
  }

  onSave() {
    this.matDialog.open(SaveDialogComponent, {width: '300px', data: {password: this.password}})
  }
}
