import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
let NologinGuard = class NologinGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(map(auth => {
            if (isNullOrUndefined(auth)) {
                return true;
            }
            else {
                this.router.navigate(['/tabs/tab1']);
                return false;
            }
        }));
    }
};
NologinGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        Router])
], NologinGuard);
export { NologinGuard };
//# sourceMappingURL=nologin.guard.js.map