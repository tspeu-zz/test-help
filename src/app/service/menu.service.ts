import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as rx   from 'rxjs';
import { _ParseAST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  _PATH = 'http://localhost:3000/api/';



  constructor(private http: HttpClient) { }

  getAllMenu(){
    console.log('CALL GET ', this._PATH +'menu');
    return this.http.get(this._PATH +'menu');

  }

}
