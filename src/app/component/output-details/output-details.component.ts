import { Component, OnInit } from '@angular/core';
import { Output1Model } from './model/output.model';
import { Res2 } from './model/res2.model';
import { SubmitModel } from '../input-details/model/submit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OutputDetailsService } from './service/output-details.service';
@Component({
  selector: 'app-output-details',
  templateUrl: './output-details.component.html',
  styleUrls: ['./output-details.component.css']
})
export class OutputDetailsComponent implements OnInit {
  subId: number | undefined;
  sessionId: number | undefined;
  year: number | undefined;

  constructor(private outputDetailsService: OutputDetailsService, private route: ActivatedRoute) { }
  singleData : SubmitModel[] = [];
  
  ngOnInit(): void {
    //  this.singleData = this.outputDetailsService.ExLevel(x,Res2);
    this.route.queryParams.subscribe(params => {
      this.subId = params['subId'];
      this.sessionId = params['sessionId'];
      this.year = params['year'];
     
    });
  }

}
