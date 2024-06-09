import {PasswordDto} from "../models/PasswordDto.model";

export type PasswordStateModel = {
  dtos: PasswordDto[]
  hasNext: boolean;
  hasPre: boolean
  totalPages: number;
}

export const passwordState: PasswordStateModel = {
  dtos: [],
  hasNext: false,
  hasPre: false,
  totalPages: 0
}
