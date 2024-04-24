import { Component } from '@angular/core';
import { ModulLoginModule } from './modul-login.module';

//importar lo necesario para el formulario
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { UseServiceService } from '../../../services/use-service.service';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


loginForm:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder,private userService:UseServiceService,private router:Router){

    this.loginForm=this.formBuilder.group({

      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',[Validators.required,Validators.minLength(3)]]

  })
}



   login(e:Event){
    e.preventDefault()

    if(this.loginForm.invalid){
return
    }

   let body={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
   }

    this.userService.loging(body)
    .then(response=>{
        console.log(response)
        this.router.navigate(['/'])
    })
    .catch(error=> console.error(error))
  }



  loginGoogle(){
    this.userService.loginWithGoogle()
    .then((response)=>{
        console.log(response)
        this.router.navigate(['/'])
    })
    .catch(error=>console.log(error))
  }
  }



