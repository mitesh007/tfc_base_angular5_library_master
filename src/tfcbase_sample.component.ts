import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tfcbase-component',
  templateUrl: './tfcbase_sample.component.html' ,
  styleUrls:['./tfcbase_sample.component.css']
})
export class TFCBaseComponent implements OnInit {
  @Input() name: string;
  @Input() gender: string;

  ngOnInit() {
  }

}
