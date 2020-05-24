import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.showErrorLogin = false;
    }
    ngOnInit() { }
    onSubmitLogin() {
        this._auth.login(this.email, this.password).then(res => {
            this.router.navigate(['/tabs/tab1']);
            console.log(res);
        }).catch(err => { this.showErrorLogin = true; });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    }),
    __metadata("design:paramtypes", [AuthService, Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map