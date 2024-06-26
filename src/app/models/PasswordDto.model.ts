import {PasswordRequest} from "./PasswordRequest.model";

export type PasswordDto = {
  id: number;
  name: string;
  password: string;
  hasNumbers: boolean;
  hasSpecialChars: boolean;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  length: number;
}
