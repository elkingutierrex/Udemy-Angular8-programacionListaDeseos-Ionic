import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
      header: 'Nueva tarea',
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
            if( data.titulo.length === 0 || !data.prioridad  || !data.venceEn ){              
              return;
            }

            const listaId = this._deseosService.crearLista( data.titulo, data.prioridad, data.venceEn );

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`)
          }
        }        
      ]
  });

  alert.present();
 
  }



}
