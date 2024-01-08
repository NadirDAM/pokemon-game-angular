import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import {ServeijugadorService} from "../../../serveijugador.service";

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  get score(): number {
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService,
    private s : ServeijugadorService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    let registros = JSON.parse(localStorage.getItem('scores')) || [];
    const nuevoRegistro = {
      nom: localStorage.getItem("usuariActual"),
      punts: this.score,
    };
    registros.push(nuevoRegistro);
    localStorage.setItem('scores', JSON.stringify(registros));
  }

}
