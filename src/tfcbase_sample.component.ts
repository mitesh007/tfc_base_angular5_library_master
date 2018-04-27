import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tfcbase-component',
  template: `<h3>Hello {{name}}, <br/> Welcome to Thermo Fisher Angular 5 Library</h3>`
})
export class TFCBaseComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
  }

}
