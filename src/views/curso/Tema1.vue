<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3: Atributos de la persona natural'" :subTitulo="'1. Atributos de la persona natural'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        p.mb-4 Para conocer sobre los atributos de la persona natural, lo invitamos a escuchar el siguiente podcast .
        div(style="width: 100%")
          TarjetaAudio.color-primario.mb-3(
            texto="Atributos de la persona natural"
            :audio="require('../../assets/curso/podcast/podcast_1.mp3')"
            tiempo
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )

      .col-lg-6.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
    p.mb-4 La relevancia de los atributos de la personalidad en el Derecho Civil colombiano, radica en que son la base sobre la cual se reconoce a las personas como sujetos de derecho, permitiéndoles interactuar dentro del sistema jurídico de manera plena. En efecto, estos atributos son esenciales para el ejercicio de derechos y el cumplimiento de obligaciones, así como para garantizar la seguridad jurídica en las relaciones sociales y económicas y permiten:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Identificación e individualización")
            p.mb-0 Este atributo permite identificar a cada persona de forma única, evitando confusiones y conflictos en las relaciones jurídicas. Por ejemplo, el nombre y el domicilio permiten a los individuos ser reconocidos y diferenciados en sus relaciones contractuales, patrimoniales y personales, facilitando la protección de sus derechos individuales y de aquellos que puedan afectar a terceros
          div(titulo="Protección y reconocimiento de derechos")
            p.mb-0 Al otorgar a cada persona una identidad y posición jurídica específica, se le asegura la protección de los derechos fundamentales de cada individuo. Esto significa que todos tienen derecho a un nombre, a un domicilio y a una nacionalidad, entre otros, y que estos atributos permiten el acceso a otros derechos básicos, como el derecho a la propiedad o a la integridad personal.
          div(titulo="Seguridad jurídica")
            p.mb-0 La existencia de atributos de la personalidad, garantiza la seguridad jurídica en las transacciones y relaciones civiles. Al individualizar a cada persona mediante sus atributos, el sistema legal colombiano puede aplicar la ley de manera consistente y justa. Esto es crucial en temas como los contratos, donde la capacidad jurídica es necesaria para celebrar acuerdos válidos, o en temas de herencia, donde el estado civil y el patrimonio permiten determinar los derechos sucesorios de cada individuo.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Vinculación con el Estado y la sociedad")
            p.mb-0 Los atributos de la personalidad son esenciales para la relación de cada persona con el Estado y la sociedad. Por ejemplo, la nacionalidad establece el vínculo entre una persona y el Estado colombiano, definiendo sus derechos y obligaciones cívicas, y el domicilio permite a las autoridades ejercer su jurisdicción sobre los individuos según su lugar de residencia. Además, el estado civil regula la posición de las personas en el ámbito familiar y define sus responsabilidades y derechos dentro del núcleo familiar.
          div(titulo="Conceptos de paz y cultura de paz")
            p.mb-0 Al contar con atributos como el domicilio y la nacionalidad, las personas pueden acceder a los mecanismos judiciales y administrativos dentro de la jurisdicción colombiana. El domicilio permite que las autoridades determinen la competencia de los tribunales en casos específicos, asegurando que cada persona pueda hacer valer sus derechos y recibir justicia en su lugar de residencia
          div(titulo="Conceptos de paz y cultura de paz")
            p.mb-0 Algunos de los atributos, como el patrimonio, proporcionan la base sobre la cual las personas pueden adquirir bienes, asumir obligaciones económicas y participar en la vida económica de la sociedad. En este sentido, el patrimonio permite a los individuos no solo gozar de derechos patrimoniales, sino también responsabilizarse de sus obligaciones económicas, lo cual es fundamental para el equilibrio en las relaciones contractuales y económicas.
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/5.png', alt='')
    p.mb-4 Además de los atributos de la personalidad para conferir la condición de persona, Medina (2014), establece que tienen por regla ser:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/info.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="19%" y="28%" numero="+")
        .h5.mb-2 Inalienables
        p Pertenecen exclusivamente a las personas, no pueden ser traspasados a otros sujetos bajo ningún tipo de transacción jurídica. Por principio no pueden ser enajenados.
      .tarjeta.color-acento-botones.p-3(x="79.5%" y="28%" numero="+")
        .h5.mb-2 Sin contenido patrimonial
        p No pertenecen al comercio jurídico, no tienen precio ni pueden cuantificarse en montos de dinero.
      .tarjeta.color-acento-botones.p-3(x="12%" y="53%" numero="+")
        .h5.mb-2 Irrenunciables
        p Nadie puede prescindir de manera unilateral de sus atributos, tampoco pueden ser suprimidos por ninguna autoridad, ni siquiera en aquellos escenarios en los que haya lugar a sanciones.
      .tarjeta.color-acento-botones.p-3(x="88%" y="53%" numero="+")
        .h5.mb-2 Regidos por normas de orden público
        p Están regulados por normas que no pueden modificarse o desconocerse entre particulares.
      .tarjeta.color-acento-botones.p-3(x="19.1%" y="78.5%" numero="+")
        .h5.mb-2 Imprescriptibles
        p Los atributos no pierden vigencia en el tiempo.
      .tarjeta.color-acento-botones.p-3(x="79.5%" y="78.5%" numero="+")
        .h5.mb-2 De carácter absoluto y de plena oponibilidad
        p Tienen eficacia entre todos los miembros de la sociedad. El desarrollo de la ley debe velar por su amparo.
    p.mb-4 En conclusión, los atributos de la personalidad, en el Derecho Civil colombiano, cumplen una función estructural en el reconocimiento de los individuos como sujetos de derecho y en la regulación de sus relaciones con otros individuos y con el Estado. Para Medina (2014), esto se explica en que si las normas imponen la realización de conductas, también es central que el derecho conozca quién debe comportarse de determinada forma, en qué escenarios los sujetos pueden hacer exigencias, entre otros. En últimas, los atributos de la personalidad permiten la identificación del sujeto al que se le dirigen las reglas. 
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/6.png", data-aos="zoom-in")
      .col-lg-8
        .p-4.mb-4(data-aos="fade-left" style="background-color: #DBEBF6")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, la identificación de los atributos garantiza la individualización, la protección de derechos, la seguridad jurídica, el acceso a la justicia, y la relación con el Estado y la economía, son algunos de los elementos fundamentales que dependen de estos atributos para garantizar el orden, la justicia y la paz social. 
        p(data-aos="fade-left") El Derecho Civil colombiano, al reconocer y proteger estos atributos, asegura que cada persona pueda ejercer sus derechos de manera plena, con la seguridad que su identidad y posición jurídica serán respetadas y respaldadas por la ley. Sin estos atributos, sería imposible mantener un sistema de derechos y deberes claro y eficaz, lo cual evidencia su relevancia como pilar fundamental para el ejercicio y la garantía de los derechos en la sociedad. 







</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
