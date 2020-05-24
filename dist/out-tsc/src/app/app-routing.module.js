import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NologinGuard } from './guards/nologin.guard';
const routes = [
    { path: 'Login', component: LoginComponent, canActivate: [NologinGuard] },
    {
        path: '',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    }
    // ,{ path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map