import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import all Froala Editor plugins.
//import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
// import 'froala-editor/js/languages/de.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// editor
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; //no funciona
import { AngularEditorModule } from '@kolkov/angular-editor';
// import { NgxEditorModule } from 'ng6x-editor'; //no funciiona

// ngx-quill:
import { QuillModule } from 'ngx-quill';


import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    PrincipalComponent,
    NuevoComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule, 
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
