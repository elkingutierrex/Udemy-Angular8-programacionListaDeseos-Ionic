import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent implements OnInit {  

  @Input () terminada;

  tabPage:string;

  constructor( public _deseosService: DeseosService,
               private router: Router) {  
    console.log(this.terminada)
   }

  ngOnInit() {}

  listaSeleccionada( lista : Lista){  

    if(!this.terminada){
      this.tabPage = 'tab1'; 
    }else{
      this.tabPage = 'tab2';
    }

    this.router.navigateByUrl(`/tabs/${ this.tabPage }/agregar/${ lista.id }`);
   
  }

  borrarLista( lista: Lista ){
    this._deseosService.borrarLista( lista);
  }
  

}
