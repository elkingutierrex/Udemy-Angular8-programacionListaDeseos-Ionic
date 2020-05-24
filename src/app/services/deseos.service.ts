import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListaItem } from '../models/lista-item.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];
  arrayPrioridad: any[] = [

    { descripcion: "Alta" }
    , { descripcion: "Media" }
    , { descripcion: "Baja" }

  ];

  constructor(private db: AngularFirestore) {

    this.cargarStorage();
    // this.getListasByUser();
   
  }

  crearLista(titulo: string, prioridad: any, venceEn: Date) {

    const nuevaLista = new Lista(titulo, prioridad, venceEn);
    this.listas.push(nuevaLista);
    // this.pushLista(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista(id: string | number) {

    id = Number(id);

    return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas))
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.guardarStorage();
  }

  getListasByUser() {
    return this.db.collection('listaTareas').snapshotChanges().subscribe(res => {
      res.map(result => {
        
        this.listas = [];
        const data = result.payload.doc.data() as Lista;
        
       
        this.listas.push(data);
        console.log(this.listas)
      })
    })
  }

  pushLista(lista) {
    this.db.collection('listaTareas').add({ ...lista }).then(function () {
      console.log("Document successfully written!");
    });
  }

  pushItemByLista(item: ListaItem, idLista: string) {
    this.db.collection('listaTareas').doc(idLista).update({
      item: item
    })
  }

}
