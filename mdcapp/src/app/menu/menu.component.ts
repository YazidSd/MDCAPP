import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  toggleResponsiveClass() {
    const x = document.getElementById('myTopnav');
    if (x?.classList.contains('topnav')) {
      x.classList.add('responsive');
    } else {
      x?.classList.remove('responsive');
    }
  }
}
