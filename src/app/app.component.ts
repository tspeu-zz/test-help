import { Component } from '@angular/core';

// componentes
import { NuevoComponent } from './nuevo/nuevo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  togleeNuevo = false;


  showNuevo($event) {

    this.togleeNuevo = !this.togleeNuevo;


  }

}
