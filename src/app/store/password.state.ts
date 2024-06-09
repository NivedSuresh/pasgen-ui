import {PasswordDto} from "../models/PasswordDto.model";

export type PasswordStateModel = {
  dtos: PasswordDto[]
  hasNext: boolean;
  hasPrev: boolean
  totalPages: number;
  currentPage: number;
}

export const passwordState: PasswordStateModel = {
  dtos: [],
  hasNext: false,
  hasPrev: false,
  totalPages: 0,
  currentPage: 1
}
