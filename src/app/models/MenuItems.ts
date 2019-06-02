export class MenuItem {
    id: number;
    numberMenu: string;
    titleMenu: string;
    subtitleMenu?: string;
    numberSubMenu?: string;
    hasSubMenu:boolean;
    titleBody: string;
    subTitleBody: string;
    // body: []; en mongo FIXME:
    body: string;
    bodyLista?: string;
    // bodyLista: [] en momgo
    hasBodyLista?: boolean;
    imagenLista?: string;
    image?: string;
    imageSubtitle?: string;
    isEdit: boolean;
}
