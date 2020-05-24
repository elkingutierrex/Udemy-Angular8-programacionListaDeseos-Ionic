import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../../guards/auth.guard';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule), canActivate: [AuthGuard]
                    },
                    {
                        path: 'agregar/:listaId',
                        loadChildren: '../agregar/agregar.module#AgregarPageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                    },
                    {
                        path: 'agregar/:listaId',
                        loadChildren: '../agregar/agregar.module#AgregarPageModule', canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map