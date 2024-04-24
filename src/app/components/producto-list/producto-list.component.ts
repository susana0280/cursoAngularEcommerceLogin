import { Component, OnDestroy, OnInit } from '@angular/core';
import { Init } from 'v8';
import { ProductServiceService } from '../../services/product-service.service';
import { Iproducts } from '../../models/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy {
 
  products:Iproducts[]=[]
  productSub: Subscription | undefined

  constructor(private apiService:ProductServiceService){

  }
 


  ngOnInit(): void {

  this.productSub= this.apiService.getAllproduct().subscribe({
   
      next:(product:Iproducts[])=>{this.products=product},
      error:(error:any)=>{console.error(error)},
      complete:()=>{console.log('completado')}
    
     });
  
  }
  ngOnDestroy(): void {
   this.productSub?.unsubscribe();
  }
}
