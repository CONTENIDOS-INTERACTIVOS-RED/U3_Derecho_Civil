<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3: Atributos de la persona natural'" :subTitulo="'2. Nombre, nacionalidad y domicilio'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/8.png", data-aos="zoom-in")
      .col-lg-7

        .p-4(data-aos="fade-left" style="background-color: #DBEBF6").mb-4
          p(data-aos="fade-left").mb-0 En el Derecho Civil, la identidad de una persona se construye a través de una serie de elementos que permiten individualizarla en el ámbito jurídico y social. Entre estos, el nombre, la nacionalidad y el domicilio son elementos que definen la personalidad jurídica de cada individuo. 

        p(data-aos="fade-left") Estos conceptos no solo configuran la identidad civil, sino que también establecen los derechos y obligaciones que una persona tiene dentro de un ordenamiento legal específico. El estudio de estos elementos permite comprender mejor cómo se articula la relación entre el individuo y el Estado, así como la función que cumple cada uno en la organización social.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Nombre
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4(data-aos="fade-right") El nombre es un atributo esencial de la personalidad en el Derecho Civil, ya que permite la identificación y distinción de las personas dentro de la sociedad y el sistema jurídico. El PDF Nombre, explora su evolución histórica, su función jurídica y las garantías legales que protegen su estabilidad e identidad. Además, analiza los mecanismos para realizar cambios en el nombre, destacando su importancia en la construcción de la identidad personal y el libre desarrollo de la personalidad.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Nombre

      .col-lg-5.col-7
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/9.png', alt='')
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Nacionalidad
    p.mb-4 La nacionalidad es el vínculo jurídico que une a una persona con un Estado, dotándola de una identidad en el plano internacional y garantizándole derechos y obligaciones. Es un concepto fundamental para el Derecho Civil, puesto que determina la capacidad de un individuo para participar en la vida política y social de un país, acceder a servicios estatales, y estar protegido por la ley.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 La nacionalidad también desempeña un papel crucial en situaciones que involucran conflictos de leyes y jurisdicción internacional, dado que permite identificar la legislación aplicable y la protección diplomática en otros países.
        .bloque-texto-c.p-4(style="background-color: #F7F4ED")
          i.fas.fa-quote-left.mb-3(style="color: #BA9C5A ")
          p.mb-2 “la nacionalidad es un derecho humano y fundamental, de especial importancia para los menores, a través del cual un individuo crea un vínculo jurídico, legal y político con un Estado. De esta manera, este comprende el derecho a adquirir la nacionalidad, a no ser privado de ésta y a poder cambiarla cuando se desee. Como consecuencia de su reconocimiento, se generan una serie de derechos y deberes, cuyo amparo y ejercicio depende del vínculo con el respectivo Estado del que se es nacional”. 
          span Sentencia T-155 de 2021, Corte Constitucional
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 La nacionalidad puede adquirirse de varias maneras:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Nacionalidad de origen")
            p.mb-0 Es aquella que se obtiene automáticamente al nacer, generalmente por la nacionalidad de los padres. Este principio establece que un niño nacido de ciudadanos de un determinado país adquiere automáticamente su nacionalidad, independientemente del lugar de nacimiento.
          div(titulo="Nacionalidad por nacimiento")
            p.mb-0 Según este principio, una persona adquiere la nacionalidad del país en el que nace.
          div(titulo="Nacionalidad por naturalización")
            p.mb-0 Es un proceso mediante el cual una persona extranjera puede obtener la nacionalidad de un país tras cumplir ciertos requisitos, como la residencia prolongada, la integración en la sociedad y el cumplimiento de otros requisitos legales.
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/11.png', alt='')
    .row.justify-content-center.mb-4
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/12.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-4 En el caso colombiano, el Artículo 96 de la Constitución Política establece que:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Para la nacionalidad por nacimiento")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-arrow-alt-circle-right
                p.mb-0 Naturales de Colombia: quienes nacen en el país y al momento del nacimiento uno de sus padres sea nacional colombiano; o en caso de tener padres extranjeros, uno de estos tenga como domicilio el territorio nacional.
              li.d-flex
                i.fas.fa-arrow-alt-circle-right
                p.mb-0 Hijos de padre o madre colombianos nacidos fuera del país, pero que hayan sido registrados en alguna oficina consular de la República.
          div(titulo="Nacionalidad de origen")
            p.mb-4 Para el caso de la nacionalidad por adopción, el artículo establece tres situaciones:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-arrow-alt-circle-right
                p.mb-0 Extranjeros que soliciten y obtengan carta de naturalización.
              li.d-flex
                i.fas.fa-arrow-alt-circle-right
                p.mb-0 Latinoamericanos por nacimiento domiciliados en Colombia, que pidan ser inscritos como colombianos y cuenten con autorización del gobierno.
              li.d-flex
                i.fas.fa-arrow-alt-circle-right
                p.mb-0 Miembros de pueblos indígenas que comparten  territorios fronterizos.
    p.mb-4 Existen diversas circunstancias bajo las cuales una persona puede perder su nacionalidad, tales como la adopción de otra nacionalidad en países que no permiten la doble nacionalidad o la realización de actividades contrarias a los intereses nacionales. La recuperación de la nacionalidad puede solicitarse mediante procedimientos específicos, dependiendo del sistema legal de cada país.
    div(style="background-color:#FCFAEB ").mb-5
      .row.justify-content-center
        .col-lg-8.mb-lg-0.mb-3
          .p-4
            p.mb-0 En el caso colombiano, los nacionales del país pueden renunciar de manera voluntaria a la nacionalidad. En muchos casos esto se da porque algunos países no permiten la doble nacionalidad. Ahora, respecto a la pérdida, aplica aquellos que hayan adoptado la nacionalidad colombiana y que cometan delitos contra la existencia y seguridad del Estado y el régimen constitucional. Así lo establece la ley 43 de 1993. 
        .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/13.png', alt='')
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Domicilio
    p.mb-4 El domicilio es el lugar donde una persona reside con la intención de establecerse de manera permanente o habitual. Este elemento es fundamental en el Derecho Civil, puesto que establece la jurisdicción aplicable para ciertos asuntos legales. Existen distintos tipos de domicilio:
    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.overflow-hidden.radius-1.shadow.h-100
          img(src='@/assets/curso/temas/14.png', alt='')
          .p-4.text-center.bg-white
            h4 Domicilio civil
            p.mb-0 Es el lugar donde una persona vive de manera habitual y puede ser probado por su presencia física y los vínculos sociales y familiares que allí mantiene. Este incluye el carácter material a través de la residencia.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.overflow-hidden.radius-1.shadow.h-100
          img(src='@/assets/curso/temas/15.png', alt='')
          .p-4.text-center.bg-white
            h4 Domicilio legal
            p.mb-0 Es aquel que la ley asigna a una persona en virtud de su condición o situación, como el caso de los menores, quienes tienen el domicilio de sus representantes legales.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.overflow-hidden.radius-1.shadow.h-100
          img(src='@/assets/curso/temas/16.png', alt='')
          .p-4.text-center.bg-white
            h4 Domicilio voluntario
            p.mb-0 Es el lugar elegido libremente por una persona para efectos específicos, como el cumplimiento de contratos o la notificación en procedimientos judiciales.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 Para tener en cuenta: 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Importancia del domicilio")
            p.mb-0 Importancia del domicilio	El domicilio es importante porque determina la jurisdicción territorial para cuestiones legales como el pago de impuestos, la presentación de demandas y la aplicación de ciertas normativas. Además, en casos de conflictos legales, el domicilio suele determinar el foro apropiado para resolver disputas.	  
          div(titulo="Cambio de domicilio")
            p.mb-0 El cambio de domicilio implica el traslado de residencia habitual a otro lugar. Este cambio tiene consecuencias legales, puesto que puede modificar la jurisdicción aplicable y los derechos y obligaciones en el nuevo lugar de residencia.
          div(titulo="Domicilio único")
            p.mb-0 A diferencia de las personas naturales, las personas jurídicas tienen un domicilio único que suele corresponder a su sede social o lugar principal de actividades. Este domicilio es importante para establecer la jurisdicción aplicable a la entidad.
          
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/17.png', alt='')    
    



    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
