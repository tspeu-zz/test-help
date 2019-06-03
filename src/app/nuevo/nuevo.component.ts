import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule , FormControlName , ReactiveFormsModule } from "@angular/forms";


// editor
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { AngularEditorConfig } from '@kolkov/angular-editor';
//validator
import { MustMatch } from './musmatch';
// MODELO
import { ModeloMenu } from '../models/nuevoMenu';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'
]
})

export class NuevoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  //modelo

  itemNuevo: ModeloMenu = null;

  checkManager = {
    checks: [
      { name: 'addMenuSubtitulo',  selected: false, id: 2 },
      { name: 'bodyTitulo',  selected: false, id: 3 },
      { name: 'addParrafoBody',  selected: false, id: 4 },
      { name: 'addParrafoBody',  selected: false, id: 4 },
    ]
  };
  // check imagenes
  togleeImagenSubtituloPrin = false;
  togleeImagenParrafo = false;
  togleeImagenListaParrafo = false;
  togleeImagenSubListaParrafo = false;

  // check add
  addTieneListaTituloParrafo = false;
  addTieneSubListaTituloParrafo = false;

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numMenuLat: ['', Validators.required],
      titleMenu: ['', Validators.required],
      numberSubMenu: ['', Validators.required],
      subtitleMenu: ['', Validators.required],
      addSubtitleMenu: [],

      titleBody: ['', Validators.required],
      subTitleBody: ['', Validators.required],
      addSubtitlePrincipal: [''],
      imagenTextoPrincipal: [],

      parrafoBody: ['', Validators.required],
      addImagenParrafo: [''],
      imagenParrafo: [''],
      addSubtitleParrafo : [''],

      titleListaParrafo: [],

      addParrafo: [],
      hasImagenParrafo: [false],



    // hasSubMenu:boolean;
    // titleBody: string;
    // subTitleBody: string;
    // // body: []; en mongo FIXME:
    // body: string;
    // bodyLista?: string;
    // // bodyLista: [] en momgo
    // hasBodyLista?: boolean;
    // imagenLista?: string;
    // image?: string;
    // imageSubtitle?: string;
    // isEdit: boolean;



    }
    // ,
    // {
    //     validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }
//  firstName: ['', Validators.required],
// lastName: ['', Validators.required],
// email: ['', [Validators.required, Validators.email]],
// password: ['', [Validators.required, Validators.minLength(6)]],
// confirmPassword: ['', Validators.required]
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

      this.submitted = true;

      // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      console.log('this.registerForm.value--->', this.registerForm.value);
  }

  /**
  *ADD IMAGENES->
  */
 onAddImagenSubtitulo($event) {
    this.togleeImagenSubtituloPrin = !this.togleeImagenSubtituloPrin;
  }

 onAddImagenParrafo($event) {
    this.togleeImagenParrafo = !this.togleeImagenParrafo;
  }
 onAddImagenSubtituloParrafo($event) {
    this.togleeImagenListaParrafo = !this.togleeImagenListaParrafo;
  }

 onAddImagenSubListaParrafo($event) {
    this.togleeImagenSubListaParrafo = !this.togleeImagenSubListaParrafo;
  }


  /**
   * add lista parrafo
   */
    onAddListaParrafo($event) {
        this.addTieneListaTituloParrafo = !this.addTieneListaTituloParrafo;
    }

  /**
   * add sub lista parrafo
   */
    onAddSubListaParrafo($event) {
        this.addTieneSubListaTituloParrafo = !this.addTieneSubListaTituloParrafo;
    }


  isSelected() {

  }

  onAddSubtitle() {

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
