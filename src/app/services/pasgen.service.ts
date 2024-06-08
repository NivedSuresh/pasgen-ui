import {inject, Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Clipboard} from "@angular/cdk/clipboard";
import {PasswordRequest} from "../models/PasswordRequest.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {Password} from "../models/password.model";

@Injectable({
  providedIn: 'root'
})
export class PasgenService {

  toastr: ToastrService = inject(ToastrService);

  constructor(private clipboard: Clipboard,
              private httpClient: HttpClient) { }


  copyPassword(password: string) {
    this.clipboard.copy(password);
    this.toastr.success("Copied to clipboard", "Success")
  }


  async generatePassword(req: PasswordRequest): Promise<Password> {
    try
    {
      if( !req.includeNumbers && !req.includeSpecialChars &&
          !req.includeLowerCase && !req.includeUpperCase  )
      {
        this.toastr.error("Please check atleast one constraint!");
        return {password: ''};
      }
      return await firstValueFrom(this.httpClient.post<Password>("http://localhost:8080/api", req));
    }
    catch (e: any)
    {
      this.toastr.error(e.error.detail);
      return {password: ''};
    }
  }
}
