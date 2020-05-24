import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FiltroCompletadoPipe = class FiltroCompletadoPipe {
    transform(listas, completada = true) {
        return listas.filter(lista => lista.terminada === completada);
        ;
    }
};
FiltroCompletadoPipe = __decorate([
    Pipe({
        name: 'filtroCompletado',
        pure: false
    })
], FiltroCompletadoPipe);
export { FiltroCompletadoPipe };
//# sourceMappingURL=filtro-completado.pipe.js.map