import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, firstValueFrom } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  private readonly url = "http://localhost:3001/login";

  login(usuario: User) {
    const response = this.httpClient.post(this.url, JSON.stringify(usuario), {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: "response",
    });

    return firstValueFrom(response);
  }
}
