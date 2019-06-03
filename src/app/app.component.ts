import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// componentes
import { NuevoComponent } from './nuevo/nuevo.component';
// modelo
import { MenuItem } from './models/MenuItems';
// Service
import { MenuService } from './service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  togleeNuevo = false;
  togleeNuevoFroala = false;
  togleeNuevoQuill = false;

  sideMenu: any;

constructor(private menuService: MenuService) {}


  showNuevo($event) {
    this.togleeNuevo = !this.togleeNuevo;
  }
  showNuevo2($event) {
    this.togleeNuevoFroala = !this.togleeNuevoFroala;
  }
  showNuevo3($event) {
    this.togleeNuevoQuill = !this.togleeNuevoQuill;
  }

  ngOnInit(): void {
    //TODO:
    this.menuService.getAllMenu()
      .subscribe( (res) => {
          this.sideMenu = res;
          console.log('sideMENU:', this.sideMenu);
        } , error =>{
          console.log('ERROR->', error);
      });


  }

  setClasses() {
    let classes ={
      'font-size' : "12 px"
    };

    return classes;
  }
}
/*
{ id: 1, numberMenu : '1',titleMenu: 'Introducción',
        titleBody: 'Ayuda a la prescripción de REC-SCS',
        subTitleBody: 'Introducción',
        body: `El proyecto REC-SCS surge como un módulo independiente y único de prescripción para Atención Primaria y
        Especializada para medicación ambulatoria, donde el paciente se convierte en el centro del sistema sanitario,
        adecuarse a las normativas ministeriales vigentes;
        Ley 16/2003, de Cohesión y Calidad del SNS:
            Art.33. “Se tenderá a la dispensación individualizada de medicamentos y a la implantación de la receta electrónica…”
            Art.54. Red de comunicación del SNS; CIP, intercambio de información clínica y registros sanitarios, la receta electrónica y la gestión del fondo de cohesión sanitaria.
        Ley 29/2006, de 29 de Julio, sobre Garantías y Uso Racional de los Medicamentos:
            TÍTULO VI “Del uso racional de los medicamentos de uso humano”: CAPÍTULO I “De las garantías de formación e información independiente y de calidad para la utilización adecuada de los medicamentos y productos sanitarios: Articulo 77. La receta médica y la prescripción hosiptalaria.

    Recoge normativa sobre la receta médica, haciendo referencia a la receta médica electrónica. 1718/2010 del 17 de diciembre, sobre receta médica y órdenes de dispensación: Capítulo IV “la receta médica electrónica oficial de SNS”, contempla criterios generales de desarrollo. RD 16/2012 del 20 de abril, de medidas urgentes para garantizar la sostenibilidad del SNS y mejorar la calidad y seguridad de las prestaciones. Introduce modificaciones al RD 1718/2010 de receta médica y órdenes de dispensación. RD 1675/2012, por el cual se regulan las recetas oficiales y los requisitos especiales de prescripción y dispensación de estupefacientes para uso humano y veterinario. RD 1/2015 del 24 de julio, texto refundido de la Ley de garantías y uso racional del medicamento y productos sanitarios: Art.79. Contempla las recetas médicas y la prescripción hospitalaria. Art.80. Los sistemas de información para el apoyo a la prescripción. Normativa Autonómica Vigente: • Diciembre de 2007: Convenio Marco de Colaboración entre la Consejería de Sanidad y los Colegios Oficiales de Farmacéuticos de Canarias, para el desarrollo e implantación de la receta electrónica en la Comunidad Autónoma de Canarias. • Resolución de 26 de marzo de 2013, relativo a las medidas y acciones extraordinarias para la reducción del gasto.

        MEDIDAS ESPECÍFICAS EN MATERIA DE SANIDAD. RECETA ELECTRÓNICA CONTINUA CANARIA:
        “A efectos de racionalizar el gasto público respecto a la prescripción y dispensación de
        medicamentos en el ámbito de la Comunidad Autónoma de Canarias, se dará priorizará que
        la prescripción por parte de los facultativos del Servicio Canario de la Salud se realice través
        de la Receta Electrónica Continua Canaria (REC-SCS)”. `,
        image: 'no', isEdit: true, hasSubMenu:false,
      }, { id: 2, numberMenu : '2',titleMenu: 'Aspectos legales',
      subtitleMenu:"USO DE CERTIFICADOS ELECTRÓNICOS",numberSubMenu:"2.1",
      titleBody: 'Aspectos legales',
      subTitleBody: 'USO DE CERTIFICADOS ELECTRÓNICOS',
      body: `Para la emisión de receta electrónica es requisito indispensable el uso de certificado electrónico reconocido, según el art. 8 del Real Decreto 1718/2010 de 17 de diciembre del año 2011. Con el objetivo de garantizar la seguridad en el uso y distribución de los mismos, el Servicio Canario de la Salud entrega a cada profesional lo que denominamos “token”. En nuestro caso, el token es un dispositivo criptográfico similar a un pendrive. Se usa para almacenar el certificado electrónico de manera segura. Cuenta con todas las garantías, tanto de seguridad como de firma legal manuscrita, proporcionando máxima seguridad al profesional. Este token debe ser solicitado a la Gerencia correspondiente generándose un nuevo certificado de la Fábrica de Moneda Nacional y Timbre o, si se posee uno, instalándolo en el token. El token debe estar insertado en el ordenador correspondiente antes de entrar en el módulo de REC-SCS para que posibilite la generación de planes de tratamiento. En caso de no estarlo no se podrá emitir planes de tratamiento. En la siguiente imagen se puede observar uno de los Tokens que se usan en la actualidad.
      `,
      image: 'images/Imagen-Token-300x211.jpg', isEdit: true,
      hasSubMenu:true

    }


*/
