import { Component, OnInit } from '@angular/core';
import { Input1Model } from './model/input1.model';
import { Input2Model } from './model/input2.model';
import { InputsModel } from './model/inputs.model';
import { Res } from './model/res.model';
import { InputServiceService } from './service/input-service.service';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {
  

  constructor(private inputServiceService: InputServiceService) { }
  examlevel: Input1Model[] = [];
  ggggqdgwgwkegjh: Input2Model[]=[]
  session: InputsModel[]=[]
  ngOnInit(): void {
    this.ggggqdgwgwkegjh = this.inputServiceService.Einpu2();
    this.session = this.inputServiceService.Einputs();
    this.inputServiceService.Einput().subscribe(
      (alvi)=>{
        console.log("test");
        console.log(alvi);
        
        
          this.examlevel = alvi.payload;
      },
      (dip)=>{
        console.log("error hoise");
        
      }
    )
  }

}
