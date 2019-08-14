import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
// import { type } from 'os';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public _deseosService: DeseosService,
    public router: Router,
    public alertController: AlertController) { }


  async agregarLista() {

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
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
            if( data.titulo.length === 0){
              return;
            }

            const listaId = this._deseosService.crearLista( data.titulo );

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`)
          }
        }        
      ]
  });

  alert.present();
 
  }

listaSeleccionada( lista : Lista){
  console.log(lista);
  this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`) 
}

}
