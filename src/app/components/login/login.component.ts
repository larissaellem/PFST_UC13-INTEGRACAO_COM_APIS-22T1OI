import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginService } from "src/app/services/login.service";
import { NotificationService } from "src/app/services/notification.service";

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: "app-login-dialog",
  templateUrl: "./login.component.html",
})
export class LoginModal {
  email: string = "";
  password: string = "";
  
  static dialogRef: MatDialogRef<LoginModal, any>;

  constructor(
    public dialog: MatDialog,
    private loginService: LoginService,
    private readonly notification: NotificationService
  ) {}

  openLoginModal() {
    LoginModal.dialogRef = this.dialog.open(LoginModal, {
      panelClass: ["col-12", "col-md-6"],
    });
  }

  // funcao de login
  login() {
    if (!this.email || !this.password)
      return this.notification.openSnackBar(
        "Preencha todos os campos para fazer login",
        { style: "error" }
      );

    if (!/\S+@\S+\.\S+/.test(this.email)) {
      return this.notification.openSnackBar(
        `Email ${this.email} inválido. Digite um email válido`,
        { style: "error" }
      );
    }

    const username = this.email.split("@")[0];

    this.loginService
      .login({
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...response.body,
            username,
          })
        );

        this.notification.openSnackBar(
          `Login realizado. Boas vindas, ${username}`
        );

        LoginModal.dialogRef.close();
      })
      .catch((error) => {
        console.error("erro ao fazer login: ", error.error)
        return this.notification.openSnackBar(
          `Erro ao fazer login: ${error.error}`,
          { style: "error" }
        );
      });
  }

  // funcao de logout
  logout() {
    localStorage.removeItem("user");
    this.notification.openSnackBar("Logout realizado com sucesso", {
      style: 'warning'
    });
    LoginModal.dialogRef.close();
  }

  hasLogged() {
    return localStorage.getItem("user");
  }
}
