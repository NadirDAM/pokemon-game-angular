import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServeijugadorService} from "../serveijugador.service";

@Component({
  selector: 'app-iniciar-sessio-el-haidouri',
  templateUrl: './iniciar-sessio-el-haidouri.component.html',
  styleUrls: ['./iniciar-sessio-el-haidouri.component.css']
})
export class IniciarSessioElHaidouriComponent implements OnInit {
  nomJugador:any

  constructor(private router: Router, private s : ServeijugadorService) { }

  ngOnInit(): void {
  }

  enviarJuagador () {
    this.router.navigate(['./home']);
    this.s.nomJugador = this.nomJugador
  }

}
