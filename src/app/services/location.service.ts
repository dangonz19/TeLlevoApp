import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiResponse';
import { Region } from '../models/region';
import { Comuna } from '../models/comuna';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  selectedRegion: Region | undefined; // Variable para mantener la región seleccionada
  selectedComuna: Comuna | undefined; // Variable para mantener la comuna seleccionada


  constructor(private http:HttpClient) { }

  async getRegion(){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}region`));
  }

  async getComuna(regionId:number){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}comuna/` + regionId));
  }
}
