import { Component, OnInit } from "@angular/core";
import { LoginModal } from "src/app/components/login/login.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent extends LoginModal implements OnInit {
  ngOnInit() {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      (
        document.querySelector("#header-login-name") as HTMLElement
      ).textContent = "Olá, " + userData.username;
    }
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
