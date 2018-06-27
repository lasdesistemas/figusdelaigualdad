## Figus de la Igualdad

### ¿Cómo levantar el ambiente?
`npm install`

`npm run dev`

### Importante
El orden de los países del archivo data_paises.json debe coincidir con el orden de los países del dropdown que están en selector_figu.js para que la info se muestre de manera consistente.

### URL
Se permiten los siguientes parámetros:
- ocultarHeader: si va en true se deja de mostrar el header. Si no se pasa el parámetro por default se muestra el header.
- ocultarFooter: si va en true se deja de mostrar el footer. Si no se pasa el parámetro por default se muestra el footer.
- pais1: se pasa el id del país que se quiera precargar.
- pais2: se pasa el id del otro país que se quiera precargar.

URL ejemplo precargando los países: http://localhost:3000/?pais1=7&pais2=21 </br>
URL ejemplo ocultando header y footer: http://localhost:3000/?ocultarHeader=true&ocultarFooter=true </br>

Los ids de país válidos son:
 - {value:0, label:'A-Rusia'},
 - {value:1, label:'A-Arabia Saudí'},
 - {value:2, label:'A-Egipto'},
 - {value:3, label:'A-Uruguay'},
 - {value:4, label:'B-Marruecos'},
 - {value:5, label:'B-Irán'},
 - {value:6, label:'B-España'},
 - {value:7, label:'B-Portugal'},
 - {value:8, label:'C-Perú'},
 - {value:9, label:'C-Australia'},
 - {value:10, label:'C-Dinamarca'},
 - {value:11, label:'C-Francia'},
 - {value:12, label:'D-Croacia'},
 - {value:13, label:'D-Nigeria'},
 - {value:14, label:'D-Argentina'},
 - {value:15, label:'D-Islandia'},
 - {value:16, label:'E-Suiza'},
 - {value:17, label:'E-Serbia'},
 - {value:18, label:'E-Costa Rica'},-
 - {value:19, label:'E-Brasil'},
 - {value:20, label:'F-México'},
 - {value:21, label:'F-Alemania'},
 - {value:22, label:'F-Corea del Sur'},
 - {value:23, label:'F-Suecia'},
 - {value:24, label:'G-Panamá'},
 - {value:25, label:'G-Túnez'},
 - {value:26, label:'G-Bélgica'},
 - {value:27, label:'G-Inglaterra'},
 - {value:28, label:'H-Japón'},
 - {value:29, label:'H-Polonia'},
 - {value:30, label:'H-Senegal'},
 - {value:31, label:'H-Colombia'}

 ### ¿Cómo generar un HTML estático para el deploy?
Correr el comando `npm run export` y se creará la carpeta `/out` que es la que debés usar para deployar. 
Podés utilizar [now](https://zeit.co/now) para hacer un deploy para testear. Instalalo corriendo `npm install -g now` y luego, en la carpeta out, corré `now --public`. Now te avisará cuando termine el deploy y generará un link y listo!
