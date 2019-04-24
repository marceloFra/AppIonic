import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.page.html',
  styleUrls: ['./list-prod.page.scss'],
})
export class ListProdPage implements OnInit {

  prod: Producto[];

  constructor( private gestorProducto: ProductoService ) { }

  ngOnInit() {
    this.gestorProducto.listaProductos().then(
      resp => {
        this.prod = resp;
    });
    console.log(this.gestorProducto);
  }


}
