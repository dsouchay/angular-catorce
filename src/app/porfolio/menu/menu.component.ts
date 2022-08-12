import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string;
  nombre: string;
  fontIcon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menuItems:MenuItem[] = [
    {
      ruta: 'porfolio/home',
      nombre: 'About me',
      fontIcon: 'home'

    },
    {
      ruta: 'porfolio/skills',
      nombre: 'Skills',
      fontIcon: 'home'

    },
   /* {
      ruta: 'porfolio/works',
      nombre: 'Works',
      fontIcon: 'home'

    },*/
    {
      ruta: 'porfolio/contact',
      nombre: 'Contact',
      fontIcon: 'home'

    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  doAction(e:any){
    console.log({e})
  }

}
