import { Component, OnInit } from '@angular/core';
import { Input1Model } from './model/input1.model';
import { Input2Model } from './model/input2.model';
import { InputsModel } from './model/inputs.model';
import { Res } from './model/res.model';
import { InputServiceService } from './service/input-service.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {


  constructor(private inputServiceService: InputServiceService) { }
  examlevel: Input1Model[] = [];
  ggggqdgwgwkegjh: Input2Model[] = []
  session: InputsModel[] = [];
  amarYear: number = new Date().getFullYear();
  ngOnInit(): void {
    this.ggggqdgwgwkegjh = this.inputServiceService.Einpu2();
    this.session = this.inputServiceService.Einputs();
    this.inputServiceService.Einput().subscribe(
      (alvi) => {
        console.log("test");
        console.log(alvi);


        this.examlevel = alvi.payload;
      },
      (dip) => {
        console.log("error hoise");

      }
    );
  }

  amarCode(): number[] {
    let i: number;
    let j: number[] =[];
    for (i = this.amarYear; i >= this.amarYear - 20; i--) {
      j.push(i);
    }
    return j;
  }

}
