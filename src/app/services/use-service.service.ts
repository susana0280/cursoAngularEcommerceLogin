import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UseServiceService {

  constructor(private auth:Auth) {

   }




   register({email,password}:any){
 
    return createUserWithEmailAndPassword(this.auth,email,password)
   }


   loging({email,password}:any){

    return signInWithEmailAndPassword(this.auth,email,password)

   }

   logout(){

    return signOut(this.auth)
   }

   //____________________________________

   loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider())
   }
}
