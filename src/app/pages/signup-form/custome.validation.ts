import { AbstractControl, ControlContainer, ValidationErrors } from '@angular/forms';

export class CustomeValidation{
   static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
      if((control.value as string).indexOf(' ') >= 0){
         return {cannotContainSpace: true};
      }
      else return null;
   }

   static shouldbBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if(control.value == 'abeer'){
               resolve({shouldbBeUnique: true})
            }
            else{
               resolve(null);
            }
         }, 3000);
         
      })
   }
}