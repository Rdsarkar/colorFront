import { Component, OnInit } from '@angular/core';
// import { Output1Model } from './model/output.model';
// import { Res2 } from './model/res2.model';
// import { SubmitModel } from '../input-details/model/submit.model';
// import { OutputModel } from '../input-details/model/outputx.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OutputDetailsService } from './service/output-details.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-output-details',
  templateUrl: './output-details.component.html',
  styleUrls: ['./output-details.component.css']
})
export class OutputDetailsComponent implements OnInit {
  subId: number | undefined;
  sessionId: number | undefined;
  year: number | undefined;

  constructor(private outputDetailsService: OutputDetailsService, private activatedRoute: ActivatedRoute) { }
  // singleData: SubmitModel[] = [];
  // allDatarec: OutputModel[] = [];
  raj: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        console.log(params["subId"]);
        console.log(params["sessionId"]);
        console.log(params["year"]);
        this.subId = params["subId"];
        this.sessionId = params["sessionId"];
        this.year = params["year"];
        console.log(this.subId);
        console.log(this.sessionId);
        console.log(this.year);

        this.onBclk(this.subId, this.sessionId, this.year);

      });
  }

  onBclk(x: any, y: any, z: any) {
    let g = {
      examLevel: x,
      monthId: y,
      sessionYear: z
    }
    this.outputDetailsService.Lol(g).subscribe(
      (hi: any) => {
        console.log(hi);
        this.raj = hi;
      },
      (bye: any) => {
        console.log(bye);
        console.log(bye.error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: bye.error.message == undefined ? 'Something went wrong!' : bye.error.message,
          footer: '<a href="">Rajdeep vai issue fix koren</a>'
        });
      }
    );
  }
}
