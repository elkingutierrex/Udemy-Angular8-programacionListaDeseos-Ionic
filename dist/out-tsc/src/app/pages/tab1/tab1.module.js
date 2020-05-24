import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from 'src/app/components/components.module';
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ComponentsModule,
            RouterModule.forChild([{ path: '', component: Tab1Page }])
        ],
        declarations: [Tab1Page]
    })
], Tab1PageModule);
export { Tab1PageModule };
//# sourceMappingURL=tab1.module.js.map