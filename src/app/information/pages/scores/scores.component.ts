import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  array:any

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.array = JSON.parse(localStorage.getItem('scores')) || [];

  }

}
