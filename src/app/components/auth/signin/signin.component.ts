import { Component } from '@angular/core';
import { ModulLoginModule } from './modul-login.module';

//importar lo necesario para el formulario
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


loginForm:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder){

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
    console.log(this.loginForm)
   }
  }



