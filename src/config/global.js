export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '1',
        titulo: 'Atributos de la persona natural',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '2',
        titulo: 'Nombre, nacionalidad y domicilio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Nombre',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Nacionalidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Domicilio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '3',
        titulo: 'Patrimonio y estado civil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Patrimonio',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estado Civil',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '4',
        titulo: 'Derechos de la personalidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        unidad: '',
        numero: '',
        titulo: 'Sintesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Medina Pabón, J. E. (2014). Derecho civil: derecho de personas: (4 ed.). Editorial Universidad del Rosario.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69643?page=1',
    },
    {
      referencia:
        'Alvarez, L. (2010). Nociones de derecho civil y mercantil . Editorial Instituto Politécnico  Nacional',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/74697',
    },
    {
      referencia:
        'Roselló, R. (2011). Derechos de la personalidad y derechos morales de los autores. Editorial Reus. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/46466',
    },
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). Constitución política de Colombia: (3 ed.). Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68946',
    },
  ],
  glosario: [
    {
      termino: 'Apellido',
      significado:
        'nombre de familia que sigue al nombre propio y forma parte de la identidad de una persona, transmitido generalmente de manera hereditaria.',
    },
    {
      termino: 'Atributos de la personalidad',
      significado:
        'conjunto de características que permiten identificar y distinguir a cada persona en el ámbito jurídico, como el nombre, el estado civil, el domicilio, la nacionalidad, y el patrimonio.',
    },
    {
      termino: 'Derechos de la personalidad',
      significado:
        'derechos inherentes a toda persona por el simple hecho de serlo, cuyo fin es proteger la dignidad, libertad, e integridad personal, incluyendo derechos como la identidad, el honor, y la privacidad',
    },
    {
      termino: 'Domicilio',
      significado:
        'lugar en el que una persona establece su residencia habitual y que determina su localización jurídica para efectos de derechos y obligaciones.',
    },
    {
      termino: 'Estado civil',
      significado:
        'situación jurídica que define la posición de una persona en relación con su familia, como soltero, casado, divorciado o viudo, entre otros.',
    },
    {
      termino: 'Identidad',
      significado:
        'conjunto de elementos propios de una persona que la individualizan, permitiendo su reconocimiento social y jurídico',
    },
    {
      termino: 'Libre desarrollo de la personalidad',
      significado:
        'derecho fundamental que permite a la persona actuar conforme a sus propias convicciones y elecciones, sin interferencias arbitrarias.',
    },
    {
      termino: 'Nacionalidad',
      significado:
        'vínculo jurídico y político que une a una persona con un Estado, otorgándole derechos y deberes frente a él.',
    },
    {
      termino: 'Nombre',
      significado:
        'término o conjunto de palabras con las que se identifica e individualiza a una persona en sociedad y ante la ley.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'conjunto de bienes, derechos y obligaciones de contenido económico que pertenecen a una persona.',
    },
    {
      termino: 'Registro civil',
      significado:
        'documento público encargado de registrar y certificar hechos y actos relacionados con el estado civil y la identidad de las personas, como nacimientos, matrimonios y defunciones.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
