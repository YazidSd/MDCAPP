import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoris',
  templateUrl: './autoris.component.html',
  styleUrls: ['./autoris.component.css']
})
export class AutorisComponent implements OnInit { 
  todayDate: string ='';

  ngOnInit() {
    const currentDate = new Date();
    this.todayDate = currentDate.toISOString().split('T')[0];
  }

}
