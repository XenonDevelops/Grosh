# Grosh #
App web para compartir recursos en grupos.

## Programas requeridos ##
* Node JS 0.10.38
* Git
* Sublime-text 


## Instalar dependencias ##
#### Nos situamos en grosh/ y ejecutamos: ####
```bash
npm install
```

#### Ejecutar el proyecto nativamente: ####
```bash
node server.js
```
#### Ejecutar el proyecto con supervisor ####
```bash
npm install supervisor -g
```
Con esto instalamos supervisor de manera global.

Despues corremos el proyecto con supervisor, de esta manera no tenemos que estar reiniciando el server manualmente.
```bash
supervisor server.js
```