import {Component, inject, Inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {PasgenService} from "../../services/pasgen.service";
import {SavePassword} from "../../models/save-password.model";
import {passwordStore} from "../../store/password.store";

@Component({
  selector: 'app-save-dialog',
  standalone: true,
  imports: [
    MatIconButton,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './save-dialog.component.html',
  styleUrl: './save-dialog.component.css'
})
export class SaveDialogComponent {

   name = '';
   pasgenStore = inject(passwordStore);


   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
   }

  async onSave() {
     const saveReq :SavePassword = {name: this.name, password: this.data.password};
     this.name = '';
     this.pasgenStore.savePassword(saveReq).then();
  }
}
