import { Component, OnInit } from '@angular/core';
import { FormsModule , FormControlName , ReactiveFormsModule } from "@angular/forms";

// editor
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})

export class NuevoComponent implements OnInit {



  constructor( ) { }

  ngOnInit() {
  }

// tslint:disable-next-line: member-ordering
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
