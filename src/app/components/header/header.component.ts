import { Component } from '@angular/core';
import { UseServiceService } from '../../services/use-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private userService:UseServiceService,private router:Router){

  }

  logOut(){
    this.userService.logout()
    .then(()=> {
                    this.router.navigate(['/'])
                     alert('ha salido de sesion')}
  )
    .catch(error=>console.error(error))
  
  }
}
