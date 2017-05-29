import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  //Decorator que permite que a propriedade seja vista por outros
  //componentes
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
