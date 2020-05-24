import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgregarPage } from './agregar.page';
const routes = [
    {
        path: '',
        component: AgregarPage
    }
];
let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AgregarPage]
    })
], AgregarPageModule);
export { AgregarPageModule };
//# sourceMappingURL=agregar.module.js.map