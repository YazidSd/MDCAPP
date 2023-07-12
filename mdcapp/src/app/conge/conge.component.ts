import { Component, OnInit } from '@angular/core';
import { CongeService } from '../conge.service';
import { Conge } from '../conge';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit{
  todayDate: string ='';
  conge : Conge = new Conge();
  
  startDate: string = '';
  endDate: string = '';
  constructor(private congeservice : CongeService){}

  ngOnInit() {
    const currentDate = new Date();
    this.todayDate = currentDate.toISOString().split('T')[0];
    this.startDate = currentDate.toISOString().split('T')[0];
    this.endDate = currentDate.toISOString().split('T')[0];
  }
  updateEndDateMinDate() {
   
  }
  

  add(){
    if (!this.isFormValid()) {
      alert('Veuillez remplir tous les champs avant de soumettre le formulaire.');
      return;
    }
    
    this.conge.dateDebutC= this.startDate; 
    this.conge.dateFinC = this.endDate;
this.conge.dateConge=this.todayDate;

    this.congeservice.createconge(this.conge).subscribe( data => {
      console.log(data);
      alert('Demande de congé en attente de validation');
    },
    error => {
      console.log(error);
    });
  
    this.conge.nomPrenom = '';
    this.conge.fonction = '';
    this.conge.interim = '';
    this.conge.taches = '';
    this.conge.jourDemandes = '';
    this.conge.jourDispo = '';
    this.conge.jourRestants = '';
    this.conge.matriculeEmp = '';
    this.conge.motifConge = '';
    const currentDate = new Date();
    this.startDate = currentDate.toISOString().split('T')[0];
    this.endDate = currentDate.toISOString().split('T')[0];
  }
  isFormValid(): string {
    return (
      this.conge.nomPrenom &&
      this.startDate &&
      this.endDate &&
      this.conge.fonction &&
      this.conge.interim &&
      this.conge.taches &&
      this.conge.jourDemandes &&
      this.conge.jourDispo &&
      this.conge.jourRestants &&
      this.conge.matriculeEmp &&
      this.conge.motifConge
    );
  }
  
}
