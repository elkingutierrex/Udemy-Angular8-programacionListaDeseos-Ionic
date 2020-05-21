import { ListaItem } from './lista-item.model';



export class Lista {

    id:number;
    titulo: string;
    prioridad: any
    venceEn: Date;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string, prioridad: any, venceEn : Date ){
        this.titulo = titulo;
        this.prioridad = prioridad;
        this.venceEn = venceEn;

        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}