# Mi Organizador

[In English](README-en.md)

Llevo tiempo intentando organizar mi vida. Como todo el mundo. Y no es una tarea fácil. Intento tener mis finanzas controladas, saber las tareas que tengo pendientes, si he quedado con alguien y alguien me dice de queda el mismo día debo acordarme y decirle que no, tengo varios canales de comunicación entre email, Telegram, Twitter...

Hay applicaciones que solventan las cosas por separado, pero me gustaría tenerlo todo en un mismo lugar. Puede que ya exista algo, pero me gustaría intentar hacer una aplicación a mi gusto. Así que en esta aplicación es la herramienta para organizar mi vida.

Sé que será un camino difícil, me lo tomaré con paciencia. Si por el camino aprendo algo o a alguien le sirve esta aplicación, mucho mejor.

Puedes ver más detalles [aquí]().

## Índice

1. [Sobre Mi Organizador](#sobre-mi-organizador)
1. [Estado del pryecto](#estado-del-proyecto)
1. [Por donde empezar](#por-donde-empezar)
	1. [Dependencias](#dependencias)
1. [Proceso de liberación](#proceso-de-liberación)
	1. [Versionado](#versionado)
1. [Obteniendo ayuda](#obteniendo-ayuda)
1. [Contribuyendo](#contribuyendo)
1. [Licencia](#licencia)
1. [Autores](#autores)

## Sobre Mi Organizador

Hay varios aspectos que me gustaría controlar. Como de momento no hay nada hecho, esta lista de aquí abajo es mas bien una lista de deseos.

- Un apartado siempre visible del tiempo actual (fondo de pantalla dinámico?). Así como una parte con la previsión del tiempo. Esta parte parece un poco absurda, pero me sirve para planificar lavadoras o quedadas con amigos.
- Un apartado en el que controlar mis finanzas. Últimamente estoy intentando tenerlo controlado con un método llamado [Kakebo](https://www.google.com/search?hl=es&q=kakebo). Me está gustando bastante, pero la forma que tengo en mente para llevarlo requiere de algunas modificaciones.
- Hay muchos canales de comunicación en el mundo, y suelo usar varios a la vez y tengo que ir saltando de una a la otra. Me gustaría tener esto centralizado.
- Si a todo esto le podemos añadir gestión de calendario y tareas sería la aplicación ideal para mí.

Viendo ~~las necesidades~~ los deseos que tengo para esta aplicación, se ve claramente que maneja información sensible, por lo que no quiero que se quede en algún servidor. Será una aplicación de escritorio en la que se pueda trabajar sin conexión a internet, quitando las partes obvias como canales de comunicación y demás. Como puede que la aplicación se use en varios sistemas operativos, será desarrollada sobre [Electron](https://www.electronjs.org/)

**[Índice](#índice)**

## Estado del proyecto

Ahora mismo está todo por empezar.

**[Índice](#índice)**

## Por donde empezar

Como de momento no hay nada, aquí escribo lo que me gustaría que fuera la experiencia del desarrollador.

Una vez clonado el proyecto, se deberían poder instalar las dependencias:
```
$ npm i
```

La aplicación se debe poder lanzada en modo desarrollo con un comando:
```
$ npm start
```

Los test deben ser poder lanzados de forma contínua para desarrollo:
```
$ npm run test
```

Y deberían diferenciarse de los test que se lanzan en la integración contínua:
```
$ npm run test-ci
```

Se debería poder construir un instalable para cada plataforma con un comando:
```
$ npm run build
```

Para cada versión de la aplicación se debería dejar un paquete compilado en modo release en el apartado de releases.

**[Índice](#índice)**

### Dependencias

No sé si habrán imágenes en el proyecto, si las hay deberán ser gestionadas con `git-lfs`, habrá que notificarlo como dependencia.

El resto de dependencias del proyecto deberán ser instaladas con `npm i`.

**[Índice](#índice)**

### Obteniendo el código

Este proyecto está en [Github](https://github.com/44r0n/miorganizador). Puedes clonar el proyecto con el siguiente comando:
```
$ git clone git@github.com:44r0n/miorganizador.git
```

## Proceso de liberación

Para liberar una versión se añadirá una etiqueta en la rama `main` con el nombre de la versión. Se lanzará cuando las caracterísitcas correspondientes sean añadidas y la rama se encuentre estable. Los instaladores de la aplicación se deberán añadir al apartado release del repositorio.

### Versionado

El proyecto usa [versionado semántico](http://semver.org/). Para ver las versiones disponibles visita [las etiquetas del proyecto](https://github.com/44r0n/miorganizador/tags).

## Obteniendo ayuda

Si necesitas ayuda no dudes en abrir una issue de pregunta.

## Contribuyendo

Si quieres contribuir al proyecto, por favor lee [como contribuir](CONTRIBUTING.md).

**[Índice](#índice)**

## License

Este proyecto está licenciado bajo GNU v3. Comprueba [LICENSE.md](LICENSE.md) para más detalles.

**[Índice](#índice)**

## Autores

* **[Aarón Sánchez Navarro](https://github.com/44r0n)** - *Trabajo inicial* - 

**[Índice](#índice)**

