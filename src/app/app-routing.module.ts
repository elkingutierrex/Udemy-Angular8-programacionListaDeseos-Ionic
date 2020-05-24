import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: 'Login', component: LoginComponent, canActivate:[NologinGuard] },
  { path: '', component: LoginComponent, canActivate:[NologinGuard] },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  }
  // ,{ path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
