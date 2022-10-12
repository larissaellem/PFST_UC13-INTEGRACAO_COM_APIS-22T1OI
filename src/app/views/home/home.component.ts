import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  // funcao de scroll para elementos
  scrollElement(direction: string) {
    (document.querySelector("#news-container") as HTMLElement).scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -420 : 420,
    });
  }
}
