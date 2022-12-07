# Contribuyendo

Antes que nada, gracias por considerar contribuir con Mi Organizador. Son las personas como tu las que hacen que Mi Organizador sea una herramienta tan genial.

Esta guía te ayudará a comunicarte indicando que respetas el tiempo de las personas que getionan y desarrollan este proyecto. A cambio, recibirás el mismo respeto, abordando tu problema, y ayudándote a finalizar tus pull requests.

### Issues.

Puedes abrir una issue [aquí](https://github.com/44r0n/miorganizador/issues/new/choose). Las issues serán el canal por defecto para gestionar el proyecto, informar de cualquier error o realizar cualquier pregunta sobre el proyecto. Se intentará tener el cuenta la issue lo más pronto posible.

Antes de abrir una issue, por favor asegurate que no hay otra issue ya abierta con la misma petición que vas a realizar.

Las issues estarán catalogadas según las etiquetas predefinidas que vienen en Github. Si quieres, puede asignarte una issue mencionándolo en el propio hilo de la issue. Se agradecerán especialmente contribuciones marcadas con la etiqueta `help wanted`.


### ¿Que puedes aportar?

Cualquier ayuda es bien recibida. Como se ha mencionado antes, puedes asignarte una issue en la que desees trabaja comentándolo en la misma issue. O si bien has encontrado algún bug o falta de documentación, puedes [abrir una issue](https://github.com/44r0n/miorganizador/issues/new/choose) y comentar que vas a trabajar en ello.

### ¿Como puedes aportar?

Puedes seguir los siguientes pasos para tener tu repositorio configurado para poder empezar a trabajar en tu aportación.

1. Haz un [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) del proyecto, clonalo en tu equipo y configura tu servidor remoto:
```bash
# Clona tu proyecto forkeado en el directorio actual
$ git clone https://github.com/<tu-nombre-de-usuario>/<nombre-repositorio>
# Entra al directorio
$ cd <nombre-repositorio>
# Asigna el repositorio original al remoto llamado "upstream"
$ git remote add upstream https://github.com/44r0n/miorganizador
```

2. Si clonaste el repositorio hace tiempo, debes actualizarlo para disponer de los últimos cambios:
```bash
$ git checkout main
$ git pull upstream main
```

3. Crea una rama con el nombre de lo que vas a trabajar, corrección, nueva característica, documentación, etc:
```bash
git checkout -b <nombre-de-la-rama>
```

4. Asegurate de actualizar o añadir test cuando sea necesario. Si tu cambio necesita documentación asegurate de añadirla también.

5. Publica tus cambios en tu repositorio forkeado.
```bash
$ git push origin <nombre-de-la-rama>
```

6. [Abre un pull request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) con un título y descripción claros.

Si durante este proceso tienes dudas sobre el cambio que vas a realizar, abre el pull request en modo borrador y comenta tu duda o la ayuda que necesitas.
