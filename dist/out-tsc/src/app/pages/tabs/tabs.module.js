import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            TabsPageRoutingModule
        ],
        declarations: [TabsPage]
    })
], TabsPageModule);
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map