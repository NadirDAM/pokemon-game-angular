import { Component, Input, OnInit } from '@angular/core';
import {isMaterialExportDeclaration} from "@angular/material/schematics/ng-update/typescript/module-specifiers";

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  whenOver (id:any) {
    let imatge = document.getElementById(id)

    // @ts-ignore
    imatge.style.width = 100+"px"
    // @ts-ignore
    imatge.style.height = 100+"px"
  }

  whenLeave (id:any) {
    let imatge = document.getElementById(id)

    // @ts-ignore
    imatge.style.width = 275+"px"
    // @ts-ignore
    imatge.style.height = 200+"px"
  }

}
