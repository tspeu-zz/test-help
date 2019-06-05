export class ModeloData {
    // MENU LATERAL
    tituloMenuLat: string;
    numeroMenuLateral: number;
    hasSubMenuLateral: boolean;
    subMenulateral: [{
        tituloSubMenuLateral: string,
        numeroSubMenuLateral: number
      }];
    // TEXTO PRINCIPAL TITULO -SUBTITULO
    tituloPrincipal: string;
    subtituloPrincipal: string;
    hasImagenPrincipal: boolean;
    imagenPrincipalURL: string;
    imagenPrincipal: {data: any, contentType: string};
    // TEXTO PRINCIPAL PÁRRAFO
    parrafo: [
      {
        tituloParr: string,
        hasImagenParr: false,
        imagenParrURL: string,
        imagenParr: {data: any, contentType: string},
        hasListaParr: boolean,
        // TEXTO PRINCIPAL LISTA PÁRRAFO
        listaParr: [
          {
            titulolistaParr: string;
            hasImagenlistaParr: false;
            imagenlistaParrURL: string;
            imagenlistaParr: {data: any, contentType: string};
            hasSubListaParr: boolean,
            // TEXTO PRINCIPAL SUBLISTA PÁRRAFO
            SubListaParr: [{
              tituloSubListaParr:  string;
              hasImagenSubListaParr: false;
              imagenSubListaParrURL:  string;
              imagenSubListaParr:  {data: any, contentType: string};
            }];
          }]
      }];
      isEdit: false;
  }

  //
  // bodyLista: [{}];
  // numberMenu: string;
  // titleMenu: string;
  // subtitleMenu: string;
  // numberSubMenu: string;
  // hasSubMenu: false;
  // titleBody: string;
  // subTitleBody: string;
  // hasBodyLista:  false;
  // imagenLista: string;
  // image: string;
  // imageSubtitle: {
  //     hasImagen: false,
  //     imagen: string
  // };
