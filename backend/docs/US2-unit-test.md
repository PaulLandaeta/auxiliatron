# Tutorial: Cómo Instalar y Usar Mocha para Pruebas Unitarias en Node.js

En este tutorial, aprenderás cómo instalar y utilizar Mocha, una librería de pruebas para Node.js, para escribir pruebas unitarias efectivas en tu proyecto. Las pruebas unitarias son fundamentales para asegurarte de que tu código funciona correctamente y se comporta como se espera.

## Paso 1:  Instalar Mocha

Mocha es una librería de pruebas ampliamente utilizada en el mundo de Node.js. Instálala como una dependencia de desarrollo en tu proyecto:

```sh
    npm install mocha chai sinon --save-dev
```

## Paso 2: Estructura de Carpetas y Archivos
Crea una carpeta llamada test en la raíz de tu proyecto. Dentro de esta carpeta, crearás archivos con extensiones .test.js que contendrán tus pruebas.


## Paso 3: Escribe tus Pruebas
Dentro de la carpeta test, crea un archivo con un nombre que termine en .test.js o .spec.js. Estos archivos contendrán tus pruebas.


## Paso 4: Correr tus pruebas 
Ejecuta tus pruebas utilizando el comando npx mocha seguido de la ruta a la carpeta de pruebas:

```sh
    npx mocha test
```