# Auditoría del rediseño — 21 de octubre de 2026

## Estructura anterior y comparación

Se leyeron el HTML, los estilos y las fuentes fotográficas de las otras cinco landings, sin editar sus archivos. La versión anterior repetía el hero con texto lateral y foto, titulares serif con cursivas, introducción en dos columnas, cabeceras de sección con texto auxiliar lateral, cuadrícula de variedades y contacto dividido. Estos patrones también aparecían en La Casa del Muro, La Casita de El Bosque y Restaurante Hotel Puerta del Parque; Café-Pub Andalucía compartía las tarjetas de contenido y las cabeceras de sección. No se atribuye copia literal de código: se trata de similitud de composición.

La nueva versión cambia el HTML y el orden narrativo. Pasa a una portada de producto centrado sobre marfil, manifiesto solo tipográfico, macro a todo el ancho, franjas editoriales alternas, documentación asimétrica, paisaje centrado y contacto oscuro. Se conservan las fuentes locales como recursos de esta marca; no se reutilizan recursos de las otras webs.

## Inventario fotográfico anterior

| Archivo retirado | Diagnóstico | Sustitución en la composición |
| --- | --- | --- |
| hero.webp | Estudio oscuro; hero lateral anterior | Nuevo recipiente sin marca sobre blanco, portada centrada |
| textura.webp | Cuchara y tarro en vertical; bloque de introducción convencional | Macro horizontal nueva |
| monte.webp | Tarro decorativo con flor, menos adecuado para la campaña | Nueva fotografía de miel con cuchara y tarro sin etiqueta |
| madrono.webp | Recipiente oscuro de estudio | Nuevo detalle de miel en cuchara metálica sobre claro |
| apicultor.webp | Encuadre horizontal del trabajo con panal | Nueva escena documental vertical con protección |
| panal.webp | Detalle anterior de panal | Nuevo macro de abejas trabajando |
| flor.webp | Fotografía genérica que no aporta al nuevo relato | Retirada al reconstruir la sección documental |
| mesa.webp | Composición con limón, cercana a editorial de desayuno | Retirada con la sección gastronómica independiente |
| grazalema.webp | Misma fotografía de Los Terrazgos presente en otro proyecto | Nueva fotografía del pinsapar de Ángel Regatero |

Las nueve imágenes se retiraron solo después de comprobar que el nuevo HTML, CSS y JavaScript no las utilizan. No se borraron recursos de otras carpetas.

## Duplicados exactos y perceptuales

- Se calcularon SHA-256 de las nueve fotografías anteriores y las 31 fotografías raster presentes en otras landings. No se encontraron duplicados exactos entre ambos conjuntos.
- Se calcularon hashes perceptuales dHash de 64 bits mediante comparaci?n de la suma de canales RGB de miniaturas 9 × 8 en Canvas. Se compararon las nueve fotos anteriores con las 31 de las otras webs; se revisaron candidatos con distancia de Hamming de hasta 8.
- Único candidato: la imagen anterior de Grazalema y `sierra-grazalema-terrazgos.webp` del restaurante, distancia 6/64. La inspección visual de hojas de contacto y los README de ambos proyectos confirman el mismo original de Valleuve, «Panorámica Sierra de Grazalema.jpg», con dimensiones/compresión diferentes.
- No se identificaron otras fotografías repetidas en la inspección visual de los conjuntos disponibles. La comparación perceptual por miniaturas no garantiza detectar todos los recortes o alteraciones posibles.
- Se inspeccionaron visualmente las siete fotografías nuevas frente a las de los otros proyectos. No se reutiliza ninguna de esas imágenes. Todas tienen archivos y fuentes diferentes.

## Revisión técnica

Chrome headless local: 375, 768, 1440 y 1920 px de ancho, sin desbordamiento horizontal, sin imágenes rotas, sin errores JavaScript y sin respuestas 404. Siete fotografías y dos fuentes cargadas. Anclas internas válidas. Apertura de menú, Escape, foco y cierre por enlace comprobados en 375 y 768 px. Contenido y navegación visibles sin JavaScript. `prefers-reduced-motion` comprobado. Enlaces de llamada revisados sin efectuar llamadas. Capturas completas de escritorio y móvil inspeccionadas.

Se registraron los hashes de los archivos de los otros proyectos antes del rediseño para verificar al terminar que no se modificaron. La documentación fotográfica y las licencias vigentes de los nuevos recursos están en README.md.
