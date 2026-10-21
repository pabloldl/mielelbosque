# Miel El Bosque — La esencia dorada de la sierra

Propuesta web no oficial. Campaña gastronómica local en HTML5, CSS3 y JavaScript vanilla, sin frameworks ni compilación. Todos los recursos de la página están dentro de esta carpeta.

## Ejecución local

Abre `index.html` en un navegador o sirve esta carpeta con un servidor estático local. No necesita instalación de paquetes, claves ni servicios externos para funcionar. No hay procesos de compra ni formularios sin destino.

## Nueva composición

1. Portada clara de producto centrado, con titular integrado «De la sierra a tu mesa.» y contacto telefónico visible.
2. Manifiesto tipográfico «Naturaleza. Abejas. Miel.» con tres escalas y alineaciones distintas.
3. Macro horizontal de miel con una leyenda editorial; en móvil la leyenda pasa debajo de la fotografía.
4. Dos franjas de variedades, con composiciones alternas y consulta telefónica, sin tarjetas ni precios.
5. Apicultura como composición documental asimétrica: retrato vertical, detalle pequeño de panal y texto separado.
6. Origen en una panorámica real del pinsapar de Grazalema con título centrado y atribución visible.
7. Contacto oscuro y centrado «¿Hablamos de miel?», llamada y datos del negocio.

Paleta: marfil #F6F3EB, chocolate #30251D, ámbar #A96520, miel #E8B84F y blanco. Bodoni Moda y Manrope locales, con sus licencias SIL Open Font License en `fonts/`. Se han eliminado el hero lateral, la cinta decorativa, la cuadrícula de productos, la sección gastronómica independiente y el contacto anterior en dos columnas.

## Contenido y datos

Datos facilitados en el encargo: MIEL EL BOSQUE, 11670 El Bosque, Cádiz, teléfono +34 625 318 041. No hay dirección postal exacta ni coordenadas del negocio. La búsqueda de Maps no acredita un punto de atención; se recomienda consultar antes de desplazarse.

Las variedades están documentadas por el distribuidor Quesos El Bosqueño:

- [Miel natural El Bosque / monte](https://www.quesoselbosque.com/tienda/producto/miel-natural-el-bosque/).
- [Miel de madroño El Bosque](https://www.quesoselbosque.com/tienda/producto/miel-madrono-el-bosque/).

Estos documentos no acreditan existencias ni surtido completo. No se inventan precios, formatos, certificaciones, horarios, premios ni redes. El proceso de elaboración descrito es general y no atribuye técnicas concretas al productor. El JSON-LD LocalBusiness utiliza solamente los datos facilitados. La imagen Open Graph tiene ruta relativa porque no existe una URL definitiva del proyecto; algunos consumidores de esos metadatos requieren una URL absoluta.

## Fotografía y licencias

No se han facilitado imágenes propias autorizadas del negocio. Las seis fotografías de producto y apicultura son **ilustrativas** y llevan indicación visible: no muestran variedades, envases, instalaciones ni personas verificadas de Miel El Bosque. No se han añadido etiquetas ficticias ni utilizado imágenes generadas. Las dos imágenes de variedades ilustran miel y no acreditan su tipo botánico ni su color real.

Fuentes consultadas el 21 de octubre de 2026. Las fotografías Pexels están sujetas a la [licencia Pexels](https://www.pexels.com/license/), que permite uso y modificación, con sus restricciones, incluida la prohibición de sugerir respaldo de personas o marcas retratadas. Se guardan localmente en WebP; el encuadre se adapta mediante CSS sin deformar proporciones.

| Archivo actual | Autor | Fuente | Licencia |
| --- | --- | --- | --- |
| `img/portada-miel.webp` | Gundula Vogel | [Clear Glass Honey Jar with Dipper on White, 35282122](https://www.pexels.com/photo/clear-glass-honey-jar-with-dipper-on-white-35282122/) | Pexels |
| `img/macro-miel.webp` | Three-shots | [Close-up Photography of Honey, 714522](https://www.pexels.com/photo/close-up-photography-of-honey-714522/) | Pexels |
| `img/monte-cuchara.webp` | Jusper Mwangi | [Person Holding Steel Spoon Above Honey Jar, 4904195](https://www.pexels.com/photo/person-holding-steel-spoon-above-honey-jar-4904195/) | Pexels |
| `img/madrono-miel.webp` | John Benedict Malong | [Close-Up of Honey Dripping from Spoon, 37014729](https://www.pexels.com/photo/close-up-of-honey-dripping-from-spoon-37014729/) | Pexels |
| `img/oficio-apicola.webp` | Anete Lusina | [Faceless beekeeper checking honeycomb in apiary, 5247983](https://www.pexels.com/photo/faceless-beekeeper-checking-honeycomb-in-apiary-5247983/) | Pexels |
| `img/abejas-panal.webp` | Jade | [Close-Up Shot of Bees on a Honeycomb, 7176847](https://www.pexels.com/photo/close-up-shot-of-bees-on-a-honeycomb-7176847/) | Pexels |
| `img/pinsapar-grazalema.webp` | Ángel Regatero (Aregatero26) | [Bosque de Abies pinsapo — Parque Natural de la Sierra de Grazalema](https://commons.wikimedia.org/wiki/File:Bosque_de_Abies_pinsapo_-_Parque_Natural_de_la_Sierra_de_Grazalema.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

Paisaje: fotografía real del 5 de mayo de 2017, de Ángel Regatero, que representa el pinsapar de la Sierra de Grazalema. No representa un colmenar o finca de la marca. Modificaciones: reducción del original 6016 × 4000 a 2400 × 1596, conversión a WebP, recorte y oscurecimiento visual mediante CSS. El derivado mantiene CC BY-SA 4.0; la página incluye atribución y enlaces a original y licencia. Esta licencia no se extiende a las fotografías de Pexels.

Fuentes: [Bodoni Moda](https://github.com/google/fonts/tree/main/ofl/bodonimoda) y [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope), con licencias incluidas.

## Auditoría y validación

La [auditoría de diseño y fotografías](docs/auditoria-diseno.md) detalla la composición anterior, el inventario retirado y la única fotografía repetida detectada entre proyectos. Se sustituyó toda la selección anterior: nueve recursos retirados y siete fotografías nuevas.

Comprobado en Chrome headless local a 375, 768, 1440 y 1920 px:

- Sin desbordamiento horizontal; siete imágenes decodificadas y fuentes locales cargadas.
- Sin errores JavaScript ni respuestas HTTP 404 en los recursos solicitados.
- Todos los enlaces internos apuntan a secciones existentes.
- Menú móvil: apertura, cierre mediante Escape, devolución del foco y cierre al seguir un enlace, en 375 y 768 px.
- Movimiento reducido: desplazamiento automático y contenido visible.
- Con JavaScript desactivado: navegación y contenido visibles.
- Enlaces telefónicos con destino `tel:+34625318041`; no se realizaron llamadas.
- Inspección visual de las fotografías nuevas, comparación con las anteriores y revisión de capturas de escritorio y móvil.
- Sintaxis JavaScript comprobada mediante `node --check`.

No se ha ejecutado una auditoría completa WCAG, Lighthouse, lectores de pantalla ni pruebas en teléfonos físicos. Los recursos de las otras landings se consultaron solo para comparación.

## Pendientes del negocio

Confirmar los datos actuales, atención al público, surtido y disponibilidad. Obtener fotografías propias y aprobación de textos; sustituir las imágenes ilustrativas por imágenes autorizadas cuando estén disponibles. Incorporar titularidad y textos legales con datos reales para una versión oficial.
