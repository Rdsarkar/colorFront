import { Component, OnInit } from '@angular/core';
import { Output1Model } from './model/output.model';

@Component({
  selector: 'app-output-details',
  templateUrl: './output-details.component.html',
  styleUrls: ['./output-details.component.css']
})
export class OutputDetailsComponent implements OnInit {

  constructor() { }
  allData : Output1Model[] = [];
  
  ngOnInit(): void {
  }

}
