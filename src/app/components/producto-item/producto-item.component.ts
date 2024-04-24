import { Component, input, Input } from '@angular/core';
import { Iproducts } from '../../models/producto.model';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent {

@Input() productItem:Iproducts | undefined


constructor(){

}

}
