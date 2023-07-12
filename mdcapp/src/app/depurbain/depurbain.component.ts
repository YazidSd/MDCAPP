import { Component, OnInit } from '@angular/core';
import { Deplacementurbain } from '../deplacementurbain';
import { DeplacementurbainService } from '../deplacementurbain.service';
@Component({
  selector: 'app-depurbain',
  templateUrl: './depurbain.component.html',
  styleUrls: ['./depurbain.component.css']
})

export class DepurbainComponent implements OnInit{
  todayDate: string ='';
  deplacementurb : Deplacementurbain = new Deplacementurbain();
  isBack: boolean = false;
  actualHour: string = '';

  constructor(private deplacementService: DeplacementurbainService){
  }
  ngOnInit() {
    const currentDate = new Date();
    this.todayDate = currentDate.toISOString().split('T')[0];
  }

  add(){

    if (!this.isBack) {
      if (this.deplacementurb.statutDep !== 'VALIDE') {
    
        alert('Le statut du déplacement doit être "VALIDE"');
        return;}
      this.isBack = true;
      return;
    }

    this.deplacementurb.dateDep=this.todayDate;
    this.deplacementurb.heureRetourEff = this.actualHour;

    this.deplacementService.createdep(this.deplacementurb).subscribe( data => {
      console.log(data);
      alert('Deplacement en attente de validation');
    },
    error => {
      console.log(error);
    });
  }

}
