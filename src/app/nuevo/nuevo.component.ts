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
      addSubtitleMenu: [false],

      titleBody: ['', Validators.required],
      subTitleBody: ['', Validators.required],

      // addImagenSubtitleBody: [],
      // imagenTextoPrincipal: [],
      imageSubtitle : this.formBuilder.group({
        hasImage: false ,
        imagen : []
      }),




      parrafoBody: ['', Validators.required],
      addImagenParrafo: [''],
      imagenParrafo: [''],

      addSubtitleParrafo : [''],


      titleListaParrafo: [],
      titleSubListaParrafo: [],


      addParrafo: [],
      hasImagenParrafo: [false],

      addListaParrafo: [],
      addImagenListaParrafo: [],
      addSubListaParrafo: [],


    }
    // ,{validator: MustMatch('password', 'confirmPassword')}
    );
  }

  tranformToDb( data) {
    const formatData: ModeloMenu = new ModeloMenu();

    if ( data !== null) {

      formatData.numberMenu = data.numMenuLat;
      formatData.titleMenu = data.titleMenu;
      formatData.subtitleMenu = data.subtitleMenu;
      formatData.numberSubMenu = data.numberSubMenu;
      formatData.hasBodyLista = false;
      formatData.hasSubMenu = data.addSubtitleMenu;

      formatData.titleBody = data.titleBody;
      formatData.subTitleBody = data.subTitleBody;
//
      // formatData.addImagenSubtitleBody = data.addImagenSubtitleBody;
      // formatData.imagenTextoPrincipal = data.imagenTextoPrincipal;
      formatData.imageSubtitle  = {
        hasImagen : data.imageSubtitle.hasImage,
        imagen : data.imageSubtitle.image,
      };
  // formatData.imageSubtitle.imagen = '';
  // formatData.imageSubtitle.hasImagen = false;
//

      formatData.hasBodyLista = data.addSubtitleParrafo;
      formatData.imagenLista = data.addSubtitleMenu;

      // TODO: hacer el loop por si hay mas body
      const bodyTemp: any = [{}];
      bodyTemp.body = [{}];
      bodyTemp.body[0].parr = data.parrafoBody;
      bodyTemp.body[0].imagen = data.imagenParrafo || '';
      bodyTemp.body[0].hasImagen = data.addImagenParrafo;
      bodyTemp.body[0].listaParr = [{}];
      bodyTemp.body[0].listaParr[0].titulo = data.titleListaParrafo;
      bodyTemp.body[0].listaParr[0].imagen = data.imagenListaParrafo;
      bodyTemp.body[0].listaParr[0].hasImagen = false;
      bodyTemp.body[0].listaParr[0].SubListaParr = [{}];
      bodyTemp.body[0].listaParr[0].SubListaParr[0].titulo = '';
      bodyTemp.body[0].listaParr[0].SubListaParr[0].imagen = '';
      bodyTemp.body[0].listaParr[0].SubListaParr[0].hasImagen = false;

      formatData.body = bodyTemp.body.map( b => b);
      console.log('****---formatData.body***-', formatData.body);
      // formatData.body.push(bodyTemp);

      formatData.bodyLista = null;
      formatData.isEdit = false;
    }
    console.log('DATA FORMATEADA_> ', formatData );
    return formatData;
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
      let  resp: ModeloMenu;
      resp =  this.tranformToDb(this.registerForm.value);

      // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      console.log('this.registerForm.value--->', this.registerForm.value);
      console.log('RESP TRNAFORMSFO--->', resp);
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
