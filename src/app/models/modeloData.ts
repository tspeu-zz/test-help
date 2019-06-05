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
    nombreImagenPrincipal: string;
    imagenPrincipal: any;
    // TEXTO PRINCIPAL PÁRRAFO
    parrafo: [
      {
        tituloParr: string,
        hasImagenParr: false,
        nombreImagenParr: string,
        imagenParr: any,
        hasListaParr: boolean,
        // TEXTO PRINCIPAL LISTA PÁRRAFO
        listaParr: [
          {
            titulolistaParr: string;
            hasImagenlistaParr: false;
            nombreImagenlistaParr: string;
            imagenlistaParr: any;
            hasSubListaParr: boolean,
            // TEXTO PRINCIPAL SUBLISTA PÁRRAFO
            SubListaParr: [{
              tituloSubListaParr:  string;
              hasImagenSubListaParr: false;
              nombreImagenSubListaParr:  string;
              imagenSubListaParr:  any;
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
