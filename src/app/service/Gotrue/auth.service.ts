import { Injectable } from "@angular/core";
import GoTrue from "gotrue-js";

@Injectable({
  providedIn: "root",
})
export class AuthService {
   auth = new GoTrue({
    APIUrl: "https://epic-wescoff-92e6ec.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
  });
  constructor() { }

  login(){
    console.log("Entered in to login");
    this.auth
    .login("maturioracle@gmail.com", "1234")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

}
