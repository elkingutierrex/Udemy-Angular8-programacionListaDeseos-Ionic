export class Lista {
    constructor(titulo, prioridad, venceEn) {
        this.titulo = titulo;
        this.prioridad = prioridad;
        this.venceEn = venceEn;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
//# sourceMappingURL=lista.model.js.map