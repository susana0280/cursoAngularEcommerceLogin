import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UseServiceService {

  constructor(private auth:Auth) {

   }

   register({email,password}:any){
    console.log(email)
    return createUserWithEmailAndPassword(this.auth,email,password)
   }
}
