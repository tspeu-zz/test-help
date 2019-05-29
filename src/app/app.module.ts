import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';




// editor
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; //no funciona
import { AngularEditorModule } from '@kolkov/angular-editor';
// import { NgxEditorModule } from 'ng6x-editor'; //no funciiona

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    PrincipalComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
     AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
