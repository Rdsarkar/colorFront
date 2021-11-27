import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Res } from '../../input-details/model/res.model';
import { Res2 } from '../model/res2.model';
import { Output1Model } from '../model/output.model';
import { OutputModel } from '../../input-details/model/outputx.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'appplicatiom/json' })
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OutputDetailsService {

  constructor(private httpCLient: HttpClient) {

  }
  url: string = 'https://localhost:44385/api/admin/v1/FormFillup/GetExamFeeDetailsList';
  ExLevel(x: Output1Model) {
    return this.httpCLient.post<Res2>(this.url, x, headerOption)
  }

  Lol(x: any) {
    return this.httpCLient.post<any>("https://localhost:44385/api/admin/v1/FormFillup/GetExamFeeDetailsList", x, httpOptions);
  }


}
