import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseServiceService } from '../../../services/use-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  registerForm:FormGroup=new FormGroup({})


  constructor(private fb:FormBuilder,private userService:UseServiceService,private router:Router){

    this.registerForm=this.fb.group({

      fullName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(3)]],
      passwordRep:["",[Validators.required,Validators.minLength(3)]],

    })

    }

 

  register(e:Event){

    e.preventDefault()

    if(this.registerForm.invalid){
      return
    }

    console.log(this.registerForm)

    let body={
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }

      this.userService.register(body)
        .then(response=> {
          
                  console.log(response),
                  this.router.navigate(['/signin'])
                         })
       .catch(error=>console.log(error))
  }
}
