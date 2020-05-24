import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [
            LoginComponent,
            ListasComponent
        ],
        exports: [
            LoginComponent,
            ListasComponent
        ],
        imports: [
            CommonModule,
            IonicModule,
            PipesModule, FormsModule
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map