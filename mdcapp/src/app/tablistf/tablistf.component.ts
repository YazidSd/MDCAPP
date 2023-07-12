import { Component, OnInit } from '@angular/core';
import { Ordremission } from '../ordremission';
import { OrdremissionService } from '../ordremission.service';

@Component({
  selector: 'app-tablistf',
  templateUrl: './tablistf.component.html',
  styleUrls: ['./tablistf.component.css']
})
export class TablistfComponent implements OnInit {
  todayDate: string = '';
  ordremissionlist: Ordremission[] = [];

  constructor(private ordremissionService: OrdremissionService) {}

  ngOnInit() {
    const currentDate = new Date();
    this.todayDate = currentDate.toISOString().split('T')[0];
    this.readOrdremission();
  }

  private readOrdremission() {
    this.ordremissionService.readordremission().subscribe(
      (data: Ordremission[]) => {
        this.ordremissionlist = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
