import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
let AgregarPage = class AgregarPage {
    constructor(_deseosService, route) {
        this._deseosService = _deseosService;
        this.route = route;
        this.nombreItem = '';
        const listaId = this.route.snapshot.paramMap.get('listaId');
        this.lista = this._deseosService.obtenerLista(listaId);
        console.log(this.lista);
    }
    ngOnInit() {
    }
    agregarItem() {
        console.log(this.nombreItem);
        if (!this.nombreItem) {
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        console.log(nuevoItem);
        this.nombreItem = '';
        this._deseosService.guardarStorage();
    }
    cambioCheck(item) {
        const pendientes = this.lista.items
            .filter(itemData => !itemData.completado)
            .length;
        this._deseosService.guardarStorage();
        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        }
        else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }
        this._deseosService.guardarStorage();
        console.log(this._deseosService.listas);
    }
    borrarItem(i) {
        this.lista.items.splice(i, 1);
        this._deseosService.guardarStorage();
    }
};
AgregarPage = __decorate([
    Component({
        selector: 'app-agregar',
        templateUrl: './agregar.page.html',
        styleUrls: ['./agregar.page.scss'],
    }),
    __metadata("design:paramtypes", [DeseosService,
        ActivatedRoute])
], AgregarPage);
export { AgregarPage };
//# sourceMappingURL=agregar.page.js.map