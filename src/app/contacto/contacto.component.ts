import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
// import emailjs from '@emailjs/browser';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  lat = 18.457032464937583;
  lng = -97.40470275898363

  constructor() {

  }

  ngOnInit(): void {

  }

  public sendEmail(e: Event) {

    e.preventDefault();
    emailjs.sendForm('service_rd91p9q', 'template_2neywgp', e.target as HTMLFormElement, 'orQfVohXQ4HU9TIMf')
      .then((result: EmailJSResponseStatus) => {

        alert("Datos enviados correctamente" + result.status);
        }, (error) => {
        alert("Ha ocurrido un error" + error.status);
      });
      window.location.reload();
  }
}
