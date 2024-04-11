import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacementService } from './placement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement-module';
constructor(private placementService: PlacementService){
  this.getPlacementDetails();
}

  register(registerForm: NgForm){
    this.placementService.registerPlacement(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getPlacementDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getPlacementDetails(){
    this.placementService.getPlacements().subscribe(
      (resp)=>{
        console.log(resp);
        this.placementDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  placementDetails= null as any;

  deletePlacement(placement: any){
    this.placementService.deletePlacement(placement.pid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getPlacementDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  placementToUpdate={
    P_id: "",
    P_name: "",
    P_dept: "",
    desig:"",
    city: ""
  };

  edit(placement: any){
    this.placementToUpdate=placement;
  }
  updatePlacement(){
    this.placementService.updatePlacement(this.placementToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
