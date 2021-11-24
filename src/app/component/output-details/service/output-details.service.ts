import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Res } from '../../input-details/model/res.model';
import { Res2 } from '../model/res2.model';
import { Output1Model } from '../model/output.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'appplicatiom/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OutputDetailsService {

  constructor(private httpCLient: HttpClient) { 

  }
  url: string = 'https://localhost:44385/api/admin/v1/FormFillup/GetExamFeeDetailsList';
  ExLevel(x: Output1Model)
  {
    return this.httpCLient.post<Res2>(this.url, x,headerOption)
  }

  
}
