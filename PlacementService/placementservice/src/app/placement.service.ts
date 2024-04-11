import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  API="http://localhost:8080";
  public registerPlacement(placementData: any)
  {
    return this.http.post(this.API + '/registerPlacement' , placementData);
  }

  public getPlacements(){
    return this.http.get(this.API+'/getPlacement');
  }

  public deletePlacement(P_id:any){
    return this.http.delete(this.API+'/deletePlacement?P_id=' + P_id);
  }

  public updatePlacement(placement: any){
    return this.http.put(this.API +'/updatePlacement', placement);
  }
  constructor(private http: HttpClient) { }
}
