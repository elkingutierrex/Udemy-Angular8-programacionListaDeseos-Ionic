import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
// import { type } from 'os';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  today: Date = new Date();


  constructor(
    public _deseosService: DeseosService,
    public router: Router,
    public alertController: AlertController,
    public _auth: AuthService) {
  }

  ngOnInit() {
    this.mostrarProximaAvencer();
  }


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
            if (data.titulo.length === 0 || !data.prioridad || !data.venceEn) {
              return;
            }

            const listaId = this._deseosService.crearLista(data.titulo, data.prioridad, data.venceEn);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)
          }
        }
      ]
    });

    alert.present();

  }

  async logout() {
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

  mostrarProximaAvencer(){
    let proximaTareaVencer = this._deseosService.listas.sort((a,b) => new Date(a.venceEn).getTime() - new Date(b.venceEn).getTime())

    let x = this._deseosService.listas.find(item => {
      if (!item.terminada && (  moment(item.venceEn).format('L') >= moment(this.today).format('L')) ) {
        return item;
      }
    })
    if(!x)return;
    this.mostrarProximaTareaAvencer(x)

  }

  async mostrarProximaTareaAvencer(proximaTareaVencer) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: `La proxima tarea a vencer es ${proximaTareaVencer.titulo}, fecha de vencimiento ${proximaTareaVencer.venceEn} `,
      buttons: ['OK']
    });

    await alert.present();
  }



}
