import { Component, OnInit } from "@angular/core";
import { LoginModal } from "src/app/components/login/login.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent extends LoginModal {
  get username() {
    const user = localStorage.getItem("user");
    if (user) {
      const { username } = JSON.parse(user);
      return `Olá, ${username}`;
    }
    return "Login";
  }

  links = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Produtos",
      url: "#",
    },
    {
      name: "Monte seu PC",
      url: "#",
    },
    {
      name: "OFERTAS",
      url: "#",
    },
  ];

  activeIndex = 0;
}
