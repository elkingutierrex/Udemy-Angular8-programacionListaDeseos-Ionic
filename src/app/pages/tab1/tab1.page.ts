import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
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
    public alertController: AlertController,
    public _auth: AuthService) { }


  async agregarLista() {

    const alert = await this.alertController.create({
      header: 'Nueva lista de tareas',
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
          placeholder: "Vence",
          
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

  async logout(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Salir!',
      message: 'Desea <strong>cerrar sesión text</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Cerrar sesión',
          handler: () => {
            this._auth.logout();
          }
        }
      ]
    });

    await alert.present();
  }



}
