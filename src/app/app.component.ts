import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle("header_abajo", window.scrollY > 0);
    })

    window.addEventListener('DOMContentLoaded',() => {
      const btn_menu = document.querySelector('.btn_nav_menu')
      if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
          const menu_items = document.querySelector('.menu_items')
          menu_items.classList.toggle('show')
        })
      }
    })
  }

}
