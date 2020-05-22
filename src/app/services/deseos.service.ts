import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = [];
  arrayPrioridad: any[] = [

    {descripcion: "Alta"}
    ,{descripcion: "Media"}
    ,{descripcion: "Baja"}
    
  ];

  constructor() { 
    
    this.cargarStorage()
    //  const lista1 = new Lista( 'Recolelectar piedres del infinito');
    //  const lista2 = new Lista( 'Héroes a desaparecer');

    //  this.listas.push(lista1, lista2)
  }

  crearLista( titulo: string, prioridad : any, venceEn: Date){

    const nuevaLista = new Lista(titulo, prioridad , venceEn );
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista( id: string | number){

    id = Number(id);

    return this.listas.find( listaData => listaData.id === id);
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify( this.listas ))
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas =  JSON.parse(localStorage.getItem('data'));
    }
  }

  borrarLista( lista: Lista ){
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id);

    this.guardarStorage();
  }

}
