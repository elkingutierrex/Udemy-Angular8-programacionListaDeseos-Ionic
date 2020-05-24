import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
let ListasComponent = class ListasComponent {
    constructor(_deseosService, router, alertController) {
        this._deseosService = _deseosService;
        this.router = router;
        this.alertController = alertController;
        console.log(this.terminada);
    }
    ngOnInit() { }
    listaSeleccionada(lista) {
        if (!this.terminada) {
            this.tabPage = 'tab1';
        }
        else {
            this.tabPage = 'tab2';
        }
        this.router.navigateByUrl(`/tabs/${this.tabPage}/agregar/${lista.id}`);
    }
    borrarLista(lista) {
        this._deseosService.borrarLista(lista);
    }
    editarLista(lista) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(lista);
            const alert = yield this.alertController.create({
                header: 'Editar lista',
                inputs: [
                    {
                        name: "titulo",
                        type: "text",
                        value: lista.titulo,
                        placeholder: "Ingrese nuevo nombre",
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                            this.lista.closeSlidingItems();
                        }
                    },
                    {
                        text: 'Editar',
                        handler: (data) => {
                            console.log(data);
                            if (data.titulo.length === 0) {
                                return;
                            }
                            lista.titulo = data.titulo;
                            this._deseosService.guardarStorage();
                            this.lista.closeSlidingItems();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
__decorate([
    ViewChild(IonList),
    __metadata("design:type", IonList)
], ListasComponent.prototype, "lista", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ListasComponent.prototype, "terminada", void 0);
ListasComponent = __decorate([
    Component({
        selector: 'app-listas',
        templateUrl: './listas.component.html',
        styleUrls: ['./listas.component.scss'],
    }),
    __metadata("design:paramtypes", [DeseosService,
        Router,
        AlertController])
], ListasComponent);
export { ListasComponent };
//# sourceMappingURL=listas.component.js.map