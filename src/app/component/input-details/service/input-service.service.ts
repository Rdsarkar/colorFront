import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input1Model } from './../model/input1.model';
import { Input2Model } from './../model/input2.model';
import { InputsModel } from './../model/inputs.model';
import { Res } from '../model/res.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor(private httpClient: HttpClient) {
  }
  url: string = ' https://localhost:44385/api/v1/ExamLevels/GetAllExamLevel';
  Einput() {
    return this.httpClient.get<Res>(this.url, headerOption);
  }
  Einpu2() {
    let ggg: Input2Model[] = [];
    let j: Input2Model = new Input2Model();

    j.amarid = 1;
    j.amarname = "valk";
    ggg.push(j);
    let jj: Input2Model = new Input2Model();
    jj.amarid = 2;
    jj.amarname = "nox";
    ggg.push(jj);



    return ggg;

  }

  Einputs() {
    let gg: InputsModel[] = [];
    let k: InputsModel = new InputsModel();

    k.sessionId = 1;
    k.sessionName = "May-June";
    gg.push(k);

    let kk: InputsModel = new InputsModel();
    kk.sessionId = 2;
    kk.sessionName = "Nov-Dec";
    gg.push(kk);


    let kkk: InputsModel = new InputsModel();
    kkk.sessionId = 3;
    kkk.sessionName = "Mar-Apr";
    gg.push(kkk);



    return gg;

  }
}
