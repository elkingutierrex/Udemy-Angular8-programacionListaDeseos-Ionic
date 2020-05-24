import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
let AuthService = class AuthService {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    login(email, password) {
        return new Promise((resolve, rejected) => {
            this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
                resolve(user);
            }).catch(err => rejected(`Error: ${err}`));
        });
    }
    logout() {
        this.AFauth.signOut().then(() => {
            this.router.navigate(['/Login']);
        });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map