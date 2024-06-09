import {computed, inject} from "@angular/core";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {PasgenService} from "../services/pasgen.service";
import {passwordState} from "./password.state";
import {SavePassword} from "../models/save-password.model";





export const passwordStore = signalStore({providedIn : "root"},
                             withState(passwordState),

    withMethods((store,
                 pasgenService: PasgenService = inject(PasgenService)) => ({


      async fetchPasswords(page: number, count: number){
        const newState = await pasgenService.fetchPasswords(page, count);
        console.log(newState.hasPrev);

        patchState(store, {
          dtos: newState.dtos,
          currentPage: newState.currentPage,
          totalPages: newState.totalPages,
          hasPrev: newState.hasPrev,
          hasNext:newState.hasNext
        })
        console.log(store.hasPrev())
      },

      async savePassword(save: SavePassword){
        const dto = await pasgenService.save(save);
        if(store.dtos().length < 4){
          const dtos = store.dtos();
          dtos.push(dto);
          patchState(store, {dtos: dtos})
        }
      }

    })),
  )
