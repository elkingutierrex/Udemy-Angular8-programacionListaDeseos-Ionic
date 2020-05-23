import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
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
    PipesModule,FormsModule
  ]
})
export class ComponentsModule { }
