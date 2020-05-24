import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
let AuthGuard = class AuthGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(map(auth => {
            if (isNullOrUndefined(auth)) {
                this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        Router])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map