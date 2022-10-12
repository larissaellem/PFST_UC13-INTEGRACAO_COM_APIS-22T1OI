import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

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

  constructor(public dialog: MatDialog) {}

  openLoginModal() {
    LoginModal.dialogRef = this.dialog.open(LoginModal, {
      panelClass: ["col-12", "col-md-6"],
    });
  }

  // funcao de login
  login() {
    if (!this.email || !this.password)
      return alert("Preencha todos os campos para fazer login");

    const username = this.email.split("@")[0];

    localStorage.setItem(
      "user",
      JSON.stringify({ email: this.email, password: this.password, username })
    );
    (document.querySelector("#header-login-name") as HTMLElement).textContent =
      "Olá, " + username;

    LoginModal.dialogRef.close();
  }

  // funcao de logout
  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  hasLogged() {
    return localStorage.getItem("user");
  }
}
