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

  @Input () tabPage;

  constructor( public _deseosService: DeseosService,
               private router: Router) {

    
   }

  ngOnInit() {}

  listaSeleccionada( lista : Lista){  

  this.router.navigateByUrl(`/tabs/${ this.tabPage }/agregar/${ lista.id }`);



   
  }
  

}
