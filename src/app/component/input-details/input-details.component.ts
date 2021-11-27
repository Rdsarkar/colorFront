import { Component, OnInit } from '@angular/core';
import { Input1Model } from './model/input1.model';
import { Input2Model } from './model/input2.model';
import { InputsModel } from './model/inputs.model';
import { Res } from './model/res.model';
import { InputServiceService } from './service/input-service.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'
import { SubmitModel } from './model/submit.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {


  constructor(private inputServiceService: InputServiceService, private router: Router) { }
  examlevel: Input1Model[] = [];
  ggggqdgwgwkegjh: Input2Model[] = []
  session: InputsModel[] = [];
  sessionYear: number = new Date().getFullYear();

  inputEl: any;
  inputMi: any;
  inputSy: any;

  submit: SubmitModel[] = [];
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

  sessionYears(): number[] {
    let i: number;
    let j: number[] = [];
    for (i = this.sessionYear; i >= this.sessionYear - 20; i--) {
      j.push(i);
    }
    return j;
  }

  searchButton(x: SubmitModel) {
    let i: number;

  }

  j() {
    if (this.inputEl == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select valid exam level',
        footer: '<a href="">Rajdeep vai issue fix koren</a>'
      });
    }
    else if (this.inputMi == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select valid month id',
        footer: '<a href="">Rajdeep vai issue fix koren</a>'
      });
    }
    else if (this.inputSy == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select valid session year',
        footer: '<a href="">Rajdeep vai issue fix koren</a>'
      });
    }
    else {
      this.router.navigateByUrl("output/" + this.inputEl + "/" + this.inputMi + "/" + this.inputSy);
    }

  }

}
