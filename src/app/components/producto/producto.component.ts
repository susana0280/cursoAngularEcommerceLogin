import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { ProductServiceService } from '../../services/product-service.service';
import { Iproducts } from '../../models/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy{

  id:number|undefined;
  producto:Iproducts | undefined
  productSub:Subscription|undefined



  constructor(private route:ActivatedRoute, private apiService:ProductServiceService){

  }

  ngOnInit(): void {
  

this.id=parseInt( this.route.snapshot.params['id'])

//________________nuevo subcribe con objeto error_______________________
this.productSub=this.apiService.getAllproduct().subscribe({

next:(productos:Iproducts[])=>{ 
  this.producto=productos.find((producto:Iproducts)=>producto.id===this.id);
 
},
error:(err:any)=>{console.error('err',err)}

})

//________________CON SUBCRIBE________________________________
// this.productSub=this.apiService.getAllproduct().subscribe((productos:Iproducts[])=>{

//   this.producto=productos.find((producto:Iproducts)=>producto.id===this.id);
 
//  })

  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe()
  }
}
