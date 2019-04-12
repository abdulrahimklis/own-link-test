import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private data = [
    {
      name: "Edin Dzeko",
      link: "https://bs.wikipedia.org/wiki/Edin_Džeko",
      descr: "Football player of Bosnia and Herzegovina"
    },
    {
      name: "Miralem Pjanic",
      link: "https://bs.wikipedia.org/wiki/Edin_Džeko",
      descr: "Football player of Bosnia and Herzegovina"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
