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
  nuevalista: any = {
    titulo : ''
    ,prioridad : ''
    ,venceEn : ''    
  }


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
      header: 'Agrege nombre de la nueva lista',
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
            if (data.titulo.length === 0) {
              this.errorCreacionLista();
              return;
            }
            this.nuevalista.titulo = data.titulo;

            this.fechaVencimientoLista();
          }
        }
      ]
    });

    alert.present();

  }

  async fechaVencimientoLista() {

    const alert = await this.alertController.create({
      header: 'Fecha vencimiento',
      inputs: [
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
            if (!data.venceEn) {
              this.errorCreacionLista();
              return;
            }
            this.nuevalista.venceEn = data.venceEn;
            this.presentAlertRadio();
          }
        }
      ]
    });

    alert.present();

  }


  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prioridad',
      inputs: [
        {
          name: 'Urgente',
          type: 'radio',
          label: 'Urgente',
          value: 'Urgente',
          checked: true
        },
        {
          name: 'Normal',
          type: 'radio',
          label: 'Normal',
          value: 'Normal'
        },
        {
          name: 'Baja',
          type: 'radio',
          label: 'Baja',
          value: 'Baja'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.nuevalista.prioridad = data;

            if(!data.prioridad){
              this.errorCreacionLista();
            }

            const listaId = this._deseosService.crearLista(this.nuevalista.titulo, this.nuevalista.prioridad, this.nuevalista.venceEn);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)
            
          }
        }
      ]
    });

    await alert.present();
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
    let proximaTareaVencer = this._deseosService.listas.sort((a,b) => new Date(a.venceEn).getTime() - new Date(b.venceEn).getTime()).find(item => {
      if (!item.terminada && (  moment(item.venceEn).format('L') >= moment(this.today).format('L')) ) {
        return item;
      }
    })
    if(!proximaTareaVencer)return;
    this.mostrarProximaTareaAvencer(proximaTareaVencer)

  }

  async mostrarProximaTareaAvencer(proximaTareaVencer) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: `La proxima tarea a vencer es <strong> '${proximaTareaVencer.titulo}'</strong>, fecha de vencimiento <strong> ${proximaTareaVencer.venceEn}</strong> `,
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorCreacionLista() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'No se completo con exito la creación de la lista de tareas. <br>  Todos los campos deben ser diligenciados!',
      buttons: ['OK']
    });

    await alert.present();
  }



}
