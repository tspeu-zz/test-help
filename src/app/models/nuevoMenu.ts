export class ModeloMenu {
  [x: string]: any;

    body: [
      {
        parr: string;
        imagen: string;
        hasImagen: false;
        listaParr: [
            {
                titulo: string;
                imagen: string;
                hasImagen: false;
                    SubListaParr: [{
                        titulo:  string;
                        imagen:  string;
                        hasImagen: false;
                    }];
            }]
        }];
    bodyLista: [{}];
    numberMenu: string;
    titleMenu: string;
    subtitleMenu: string;
    numberSubMenu: string;
    hasSubMenu: false;

    titleBody: string;
    addImagenSubtitleBody: false;

    imagenTextoPrincipal: string;
    subTitleBody: string;
    hasBodyLista:  false;
    imagenLista: string;
    image: string;
    imageSubtitle: {
        hasImagen: false,
        imagen: string
    };
    isEdit: false;

}
