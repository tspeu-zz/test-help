import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/MenuItems';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Input() body: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
