import { Component, OnInit } from '@angular/core';
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
  totalammountwords: string | undefined;

  constructor(private outputDetailsService: OutputDetailsService, private activatedRoute: ActivatedRoute) { }
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
          footer: '<a href="">Invalid</a>'
        });
      }
    );
  }
  ConvertNumberToWords(amount: string) {
    // console.log(amount);
    var words = new Array();
    var value;
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
    var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    var received_n_array = new Array();
    for (var i = 0; i < n_length; i++) {
    received_n_array[i] = number.substr(i, 1);
    }
    for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
    n_array[i] = received_n_array[j];
    }
    for (var i = 0, j = 1; i < 9; i++, j++) {
    if (i == 0 || i == 2 || i == 4 || i == 7) {
    if (n_array[i] == 1) {
    n_array[j] = 10 + parseInt(n_array[j]);
    n_array[i] = 0;
    }
    }
    }
    value = "";
    for (var i = 0; i < 9; i++) {
    if (i == 0 || i == 2 || i == 4 || i == 7) {
    value = n_array[i] * 10;
    } else {
    value = n_array[i];
    }
    if (value != 0) {
    words_string += words[value] + " ";
    }
    if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
    words_string += "Crore ";
    }
    if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
    words_string += "Lac ";
    }
    if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
    words_string += "Thousand ";
    }
    if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
    words_string += "Hundred ";
    } else if (i == 6 && value != 0) {
    words_string += "Hundred ";
    }
    }
    words_string = words_string.split("  ").join(" ");
    }
    //this.totalammountwords = 'Taka '+ words_string + ' Only';
    return words_string
    }
    
    
    withDecimal(n: number) {
    
    
    let tempNum = n.toFixed(2)
    //console.log(tempNum)
    var nums = tempNum.toString().split('.')
    var whole = this.ConvertNumberToWords(nums[0])
    //console.log('test', nums)
    if (nums.length == 2 && nums[1] != '00') {
      var fraction = this.ConvertNumberToWords(nums[1])
      this.totalammountwords = 'Taka ' + whole + 'and Paisa ' + fraction + ' Only';
      //console.log(this.totalammount)
    } else {
      this.totalammountwords = 'Taka ' + whole + 'Only';
    }
    
    }
    
    
    withDecimalforDate(n: number) {
    let ammountwords = ' '
    let tempNum = n.toFixed(2)
    //console.log(tempNum)
    var nums = tempNum.toString().split('.')
    var whole = this.ConvertNumberToWords(nums[0])
    //console.log('test', nums)
    if (nums.length == 2 && nums[1] != '00') {
    var fraction = this.ConvertNumberToWords(nums[1])
    ammountwords = 'Taka ' + whole + 'and Paisa ' + fraction + ' Only';
    //console.log(this.totalammount)
    } else {
    ammountwords = 'Taka ' + whole + 'Only';
    }
    
    
    return ammountwords
    
    }
    
    
}
