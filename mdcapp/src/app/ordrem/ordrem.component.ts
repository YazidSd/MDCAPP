import { Component, OnInit } from '@angular/core';
import { Ordremission } from '../ordremission';
import { OrdremissionService } from '../ordremission.service';

@Component({
  selector: 'app-ordrem',
  templateUrl: './ordrem.component.html',
  styleUrls: ['./ordrem.component.css']
})
export class OrdremComponent implements OnInit{
  
  todayDate: string = '';
  startDate: string = '';
  endDate: string = '';
  
  constructor(private ordremissionService : OrdremissionService){}
  ordremission : Ordremission =new Ordremission();
  ngOnInit() {
 
    const currentDate = new Date();
    this.startDate = currentDate.toISOString().split('T')[0];
    this.endDate = currentDate.toISOString().split('T')[0];
    this.todayDate = currentDate.toISOString().split('T')[0];
  }
  
  updateEndDateMinDate() {
    
  }
  

  add() {
    if (!this.isFormValid()) {
      alert('Veuillez remplir tous les champs avant de soumettre le formulaire.');
      return;
    }
  console.log(this.ordremission);
  this.ordremission.debutMission = this.startDate; 
    this.ordremission.finMission = this.endDate;
this.ordremission.dateMission=this.todayDate;
 
    this.ordremissionService.createordremission(this.ordremission).subscribe(data => {
      console.log(data);
      alert('Ordre mission en attente de validation');
    },
    error => {
      console.log(error);
    });
    this.ordremission.nomPrenom = '';
this.ordremission.cin = '';
this.ordremission.lieuDestination = '';
this.ordremission.ville = '';
this.ordremission.objetMission = '';
this.ordremission.moyenDeplacement = '';
this.ordremission.matriculeVehicule = '';
const currentDate = new Date();
this.startDate = currentDate.toISOString().split('T')[0];
this.endDate = currentDate.toISOString().split('T')[0];


    
  }
  isFormValid(): string {
    return (
      this.ordremission.nomPrenom &&
      this.ordremission.cin &&
      this.ordremission.lieuDestination &&
      this.ordremission.ville &&
      this.ordremission.objetMission &&
      this.ordremission.moyenDeplacement &&
      this.startDate &&
      this.endDate
    );
  }
  

}
