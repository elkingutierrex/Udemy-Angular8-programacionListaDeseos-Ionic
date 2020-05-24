import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
// import { type } from 'os';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
let Tab1Page = class Tab1Page {
    constructor(_deseosService, router, alertController, _auth) {
        this._deseosService = _deseosService;
        this.router = router;
        this.alertController = alertController;
        this._auth = _auth;
    }
    agregarLista() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Nueva lista de tareas',
                inputs: [
                    {
                        name: "titulo",
                        type: "text",
                        placeholder: "Nombre de la lista",
                    },
                    {
                        name: "prioridad",
                        type: "search",
                        placeholder: "Prioridad",
                    },
                    {
                        name: "venceEn",
                        type: "date",
                        placeholder: "Vence",
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    },
                    {
                        text: 'Crear',
                        handler: (data) => {
                            console.log(data);
                            if (data.titulo.length === 0 || !data.prioridad || !data.venceEn) {
                                return;
                            }
                            const listaId = this._deseosService.crearLista(data.titulo, data.prioridad, data.venceEn);
                            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Salir!',
                message: 'Desea <strong>cerrar sesión text</strong>?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Cerrar sesión',
                        handler: () => {
                            this._auth.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Tab1Page = __decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    __metadata("design:paramtypes", [DeseosService,
        Router,
        AlertController,
        AuthService])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map