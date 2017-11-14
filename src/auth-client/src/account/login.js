import {inject} from 'aurelia-framework';
import AuthService from 'services/auth-service';

@inject(AuthService)
export class Login {
    constructor(authService) {
        this.authService = authService;
        this.message = "Login screen";
        this.userName = "";
        this.password = "";
    }

    login(){
        return this.authService.logIn(this.userName, this.password)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                alert(error);
            });

    }
}