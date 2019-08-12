import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem= '';

  constructor(
     private _deseosService: DeseosService
     , private route: ActivatedRoute
    ) { 
      const listaId = this.route.snapshot.paramMap.get('listaId');

      this.lista = this._deseosService.obtenerLista( listaId );

      console.log(this.lista)
    }

  ngOnInit() {
  }

  agregarItem(){
    console.log(this.nombreItem)
    if (!this.nombreItem){
      return;
    }
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    console.log(nuevoItem)

    this.nombreItem ='';
    this._deseosService.guardarStorage()
    

  }

}
