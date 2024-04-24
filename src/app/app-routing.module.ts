import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sign } from 'crypto';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"producto/:id",component:ProductoComponent},
  {path:"**",redirectTo:"",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
