import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFile = null;

  constructor() { }

  ngOnInit() {}

  /**
   *name: " .png"
   *size: 23260
   *type: "image/png"
   * @param $event
   */
  onFileSelect($event) {

    console.log($event);
    console.log('file', $event.target.files);
    console.log('file tipo es : ', $event.target.files[0].type);
    // "image/png"
    this.selectedFile = $event.target.files[0];

  }

  /**
   *
   */
  onUpload() {
    console.log('onUplOAD--CLICK');
    // aky usar un servicio para guardar la imagen->
    // en este caso en localStorage o local db.

    const fs = new FormData();
    // DEFAULT JS OBJECT
    fs.append('image', this.selectedFile, this.selectedFile.name);
    console.log('fs objeto,', fs);
    console.log('fs objeto,', fs.getAll);
    // this.http.post("URL",fs, {
    //   reportProgress: true ,
    //     observe: 'events' })
    // .subscribe(event => {
    //     console.log(event);
    //   if (event.type === HttpEventType.UploadProgress){
    //      console.log('TOTAL SUBIDO =', Math.round(event.loaded / event.total * 100 ) + '%' );
    //   } else if (event.type === HttpEventType.Response) {
    //     console.log(event);
    //   }
    // });

    // firebase URL->
    // Se uede usar el seguimiento de la subida->
    //
  }

}
