import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ListResponseModel } from '../models/ListResponseModel';
import { Color } from '../models/color';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
   apiUrl="http://localhost:5850/api/Colors/getall"
  constructor(private httpClient:HttpClient) { }
   
  getColors():Observable<ListResponseModel<Color>>{
      return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }

}
