import {Component, computed, inject, OnInit, WritableSignal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {passwordStore} from "../../store/password.store";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {PasswordStateModel} from "../../store/password.state";
import {DataTablesModule} from "angular-datatables";
import {Config} from "datatables.net";
import {Subject} from "rxjs";

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    JsonPipe,
    NgForOf,
    DataTablesModule,
    NgIf
  ],
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.css'
})
export class PasswordListComponent implements OnInit{

  pasgenStore = inject(passwordStore);

  dtos = computed(() => this.pasgenStore.dtos());
  hasNext = computed(() => this.pasgenStore.hasNext());
  hasPre = computed(() => this.pasgenStore.hasPrev());
  totalPages = computed(() => this.pasgenStore.totalPages());
  currentPage = computed(() => this.pasgenStore.currentPage());
  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void
  {
    this.pasgenStore.fetchPasswords(1, 5).then();
    this.dtOptions = {
      pagingType: 'full'
    };
    this.dtTrigger.next(null);
  }

  renderPage(page: number) {
    this.pasgenStore.fetchPasswords(page, 5).then();
  }
}
