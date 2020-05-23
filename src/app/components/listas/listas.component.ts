import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista: IonList;
  @Input() terminada;

  tabPage: string;

  constructor(public _deseosService: DeseosService,
    private router: Router,
    public alertController: AlertController) {
    console.log(this.terminada)
  }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {

    if (!this.terminada) {
      this.tabPage = 'tab1';
    } else {
      this.tabPage = 'tab2';
    }

    this.router.navigateByUrl(`/tabs/${this.tabPage}/agregar/${lista.id}`);

  }

  borrarLista(lista: Lista) {
    this._deseosService.borrarLista(lista);
  }

  async editarLista(lista) {
    console.log(lista);

    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo,
          placeholder: "Ingrese nuevo nombre",
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }

            lista.titulo = data.titulo;
            this._deseosService.guardarStorage();
            this.lista.closeSlidingItems();


          }
        }
      ]
    })

    alert.present();

  }

}
