import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent {
  login() {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    
    if (x && y && z) {
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
    }
  }

  register() {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    if (x && y && z) {
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    }
  }

}
