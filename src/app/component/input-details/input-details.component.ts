import { Component, OnInit } from '@angular/core';
import { Input1Model } from './model/input1.model';
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
  ngOnInit(): void {
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
