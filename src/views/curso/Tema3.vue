<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3: Atributos de la persona natural'" :subTitulo="'3. Patrimonio y estado civil'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    div(style="background-color:#FCFAEB ").mb-5
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')   
        .col-lg-8
          .p-4
            p.mb-0 El Derecho Civil regula una amplia gama de aspectos de la vida de las personas, entre ellos el patrimonio y el estado civil. Ambos conceptos poseen implicaciones profundas en el derecho, debido a que el estado civil determina las relaciones familiares y personales de una persona, mientras que el patrimonio abarca el conjunto de bienes, derechos y obligaciones que esta posee y que influyen en sus relaciones económicas. A través de estos elementos, el Derecho Civil busca establecer un orden en las relaciones de las personas con otras y con sus bienes. 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Patrimonio
    .row.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p(data-aos="fade-left") El patrimonio en Derecho Civil, es el conjunto de bienes, derechos, obligaciones y cargas que una persona posee y que tienen valor económico. Este concepto es esencial, porque determina los activos y pasivos que una persona puede transmitir o de los cuales puede disponer en su vida y después de su muerte; es decir, es el aspecto económico de las personas. En términos jurídicos, el patrimonio se concibe como una universalidad jurídica y está constituido tanto por los bienes presentes como futuros que posea una persona.
        .p-4.mb-4(data-aos="fade-left" style="background-color: #DBEBF6")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El patrimonio también cumple una función de garantía en las relaciones jurídicas, dado que los acreedores pueden exigir el cumplimiento de las obligaciones utilizando los bienes del patrimonio de un deudor. Por esta razón, en el Derecho Civil, el patrimonio es una noción indivisible y unitaria que, en principio, pertenece a una sola persona. 
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/21.png", data-aos="zoom-in")
    .row.justify-content-center.mb-4
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/22.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Las características del patrimonio, son:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Universalidad jurídica")
            p.mb-0 El patrimonio es una totalidad, es decir, un conjunto de bienes, derechos y obligaciones que una persona posee en su vida. Este concepto permite que, al fallecimiento del titular, los herederos asuman la totalidad del patrimonio, con todos los activos y pasivos que contiene.
          div(titulo="Indivisibilidad")
            p.mb-0 Aunque una persona pueda poseer distintos bienes y derechos, el patrimonio se considera una unidad, porque pertenece a un único titular y es indivisible en el ámbito jurídico. No obstante, existe la posibilidad de separar patrimonios en el caso de fideicomisos o fondos específicos.
          div(titulo="Perpetuidad")
            p.mb-0 El patrimonio se mantiene mientras existe la persona, puesto que se entiende como una prolongación de su personalidad jurídica en el ámbito económico. A su muerte, los bienes y derechos pasan a sus herederos, quienes los administran o disponen de ellos según las disposiciones legales.
          div(titulo="Es cuantificable")
            p.mb-0 Es cuantificable	El patrimonio está  integrado por elementos que puedan ser apropiados por las personas y que tengan cuantificación monetaria.
    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-6.mb-4(data-aos="zoom-in-up")
        .tarjeta.overflow-hidden.radius-1.shadow.h-100
          img(src='@/assets/curso/temas/23.png', alt='')
          .p-5.text-center.bg-white
            h4 Activos
            p.mb-0 Son los bienes y derechos de los cuales el titular puede disponer, como bienes inmuebles, dinero, y otros activos financieros. El valor de estos activos constituye el aspecto positivo del patrimonio.
      .col-lg-6.col-xl-6.mb-4(data-aos="zoom-in-up")
        .tarjeta.overflow-hidden.radius-1.shadow.h-100
          img(src='@/assets/curso/temas/24.png', alt='')
          .p-5.text-center.bg-white
            h4 Pasivos
            p.mb-0 Incluyen todas las obligaciones, deudas y cargas que pesan sobre el patrimonio. Estos pasivos representan el aspecto negativo del patrimonio y, en caso de herencia, son asumidos por los herederos en la medida en que acepten la sucesión.
    div(style="background-color:#FCFAEB ").mb-5
      .row.justify-content-center
        .col-lg-8.mb-lg-0.mb-3
          .p-4
            h3 Patrimonio como garantía general
            p.mb-0 En el Derecho Civil, se concibe el patrimonio como una garantía general de los acreedores. Esto significa que el conjunto de bienes del deudor responde de sus deudas y obligaciones frente a los acreedores, quienes pueden solicitar el cumplimiento de sus créditos. Sin embargo, el patrimonio no es una garantía limitada a bienes específicos, sino que se extiende a todos los bienes del deudor, presentes y futuros. Esta concepción permite a los acreedores ejecutar bienes del patrimonio del deudor para saldar las deudas pendientes. 
        .col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/25.png', alt='')   
    h4 División del patrimonio
    p.mb-4 En casos específicos, el patrimonio puede dividirse legalmente, como sucede con los patrimonios de las personas jurídicas. Estos patrimonios separados permiten que una persona, sin perder la titularidad de sus bienes, pueda afectarlos a un fin particular y, en consecuencia, delimitar la responsabilidad frente a acreedores específicos. Así, el patrimonio personal y el de una sociedad, por ejemplo, pueden mantenerse independientes, permitiendo una protección adicional al titular. 
    .p-4.mb-4(data-aos="fade-left" style="background-color: #E9E0CC ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/26.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Un ejemplo para estos casos es la figura de la fiducia mercantil que consiste en que una persona transfiere sus bienes a otro (el fiduciario) para que los administre en función de una finalidad determinada. El siguiente es un ejemplo de esta situación:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Julián Martínez es un empresario que desea asegurar el bienestar económico de sus hijos menores de edad, Camila y David, en caso de que algo le ocurra en el futuro. Para ello, decide constituir un contrato de fiducia con una entidad fiduciaria, mediante el cual transfiere parte de su patrimonio (un apartamento y una cuenta de ahorros) a un patrimonio autónomo, administrado por la entidad fiduciaria. En el contrato, Julián establece que los fondos de la cuenta de ahorros deben utilizarse exclusivamente para cubrir los gastos de educación de sus hijos, mientras que el apartamento solo podrá ser vendido cuando los niños alcancen la mayoría de edad, y el monto se distribuirá entre ellos.
          br
          br
          |Julián designa a la entidad fiduciaria como encargada de administrar estos bienes, dejando claro que él seguirá aportando a la cuenta de ahorros mientras esté vivo, pero que el fideicomiso solo podrá modificarse con su consentimiento hasta el momento de su fallecimiento. 
      .col-lg-5.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/27.svg', alt='')
    h4 Transmisión del patrimonio
    p.mb-4 La transmisión del patrimonio ocurre principalmente por sucesión o herencia, cuando una persona fallece. Los herederos asumen los activos y pasivos, convirtiéndose en titulares del patrimonio en su totalidad. Esta transmisión puede estar sujeta a disposiciones testamentarias o legales, y en algunos casos, los herederos pueden optar por aceptar o rechazar la herencia, especialmente si el patrimonio tiene deudas considerables. Generalmente los herederos son: los hijos y el cónyuge, los hermanos, los padres o los sobrinos. 
    div(style="background-color:#FCFAEB ").mb-5
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.png', alt='')   
        .col-lg-8
          .p-4
            p.mb-0 El patrimonio es un atributo esencial de la personalidad en el Derecho Civil, dado que representa el conjunto de derechos y obligaciones de una persona con valor económico y permite su participación plena en la vida jurídica y económica. Este atributo permite a cada individuo asegurar sus recursos, tomar decisiones sobre sus bienes y planificar su sucesión, estableciendo un legado y protegiendo a sus herederos. Además, el patrimonio garantiza que las personas puedan responder ante sus obligaciones, contribuyendo al orden y la estabilidad en las relaciones jurídicas y comerciales. En este sentido, el patrimonio refleja la autonomía y capacidad de una persona para interactuar con la sociedad, proyectando su identidad y responsabilidades.
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Estado civil
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-3 El estado civil, como atributo esencial de la personalidad jurídica, define la posición de una persona en sus relaciones familiares y sociales, determinando sus derechos y obligaciones. A continuación, el PDF Estado civil, aborda sus características, clasificación, y los mecanismos para su modificación, destacando su importancia en el ámbito jurídico para garantizar identidad, capacidad y seguridad en las interacciones legales.
        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_estado_civil.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Estado civil 
      .col-lg-5.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/29.svg', alt='')
    div(style="background-color:#FCFAEB ").mb-5
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-block.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.png', alt='')   
        .col-lg-8
          .p-4
            p.mb-0 El patrimonio y el estado civil son aspectos fundamentales para entender la configuración de la personalidad jurídica en el Derecho Civil. Mientras el patrimonio define el conjunto de bienes y obligaciones de una persona, el estado civil define su relación familiar y su capacidad de obrar. Ambos conceptos permiten al Derecho Civil regular la forma en que las personas interactúan con otras, con el Estado y con sus propios bienes. La comprensión de estos elementos proporciona una base sólida para entender la estructura jurídica de las relaciones personales y patrimoniales en la sociedad, permitiendo establecer un orden y asegurar la seguridad jurídica en las relaciones civiles. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
