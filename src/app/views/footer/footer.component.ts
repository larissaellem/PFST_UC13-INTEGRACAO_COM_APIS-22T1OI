import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  links = [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "Produtos",
      url: "#",
    },
    {
      label: "Fale conosco",
      url: "#",
    },
  ];
}
