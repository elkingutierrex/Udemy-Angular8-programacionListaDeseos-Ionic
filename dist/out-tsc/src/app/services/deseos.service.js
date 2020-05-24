import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AngularFirestore } from '@angular/fire/firestore';
let DeseosService = class DeseosService {
    constructor(db) {
        this.db = db;
        this.listas = [];
        this.arrayPrioridad = [
            { descripcion: "Alta" },
            { descripcion: "Media" },
            { descripcion: "Baja" }
        ];
        this.cargarStorage();
        // this.getListasByUser();
    }
    crearLista(titulo, prioridad, venceEn) {
        const nuevaLista = new Lista(titulo, prioridad, venceEn);
        this.listas.push(nuevaLista);
        // this.pushLista(nuevaLista);
        this.guardarStorage();
        return nuevaLista.id;
    }
    obtenerLista(id) {
        id = Number(id);
        return this.listas.find(listaData => listaData.id === id);
    }
    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }
    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }
    borrarLista(lista) {
        this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
        this.guardarStorage();
    }
    getListasByUser() {
        return this.db.collection('listaTareas').snapshotChanges().subscribe(res => {
            res.map(result => {
                this.listas = [];
                const data = result.payload.doc.data();
                this.listas.push(data);
                console.log(this.listas);
            });
        });
    }
    pushLista(lista) {
        this.db.collection('listaTareas').add(Object.assign({}, lista)).then(function () {
            console.log("Document successfully written!");
        });
    }
    pushItemByLista(item, idLista) {
        this.db.collection('listaTareas').doc(idLista).update({
            item: item
        });
    }
};
DeseosService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AngularFirestore])
], DeseosService);
export { DeseosService };
//# sourceMappingURL=deseos.service.js.map