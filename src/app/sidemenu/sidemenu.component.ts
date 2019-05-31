import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/MenuItems';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Input() item: MenuItem;

  constructor() { }

  ngOnInit() {
    console.log('SIEDEMNEUT COMONENTE', this.item);
  }

}
