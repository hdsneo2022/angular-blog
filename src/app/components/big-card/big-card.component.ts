import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  @Input()
  Id: string = "0"
  cardDescription: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
