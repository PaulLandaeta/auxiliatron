# Tutorial: Configuración de Husky para Ejecutar Unit Tests

En este tutorial, aprenderás cómo configurar Husky para automatizar la ejecución de pruebas unitarias en tu proyecto. Husky es una herramienta que te permite configurar ganchos (hooks) predefinidos que se ejecutan automáticamente en ciertos eventos de Git. Utilizaremos Husky para ejecutar tus pruebas unitarias cada vez que intentes confirmar (commit) tus cambios en el repositorio.

## Paso 1: Instalación de Husky

Lo primero que necesitas hacer es instalar Husky en tu proyecto. Puedes hacerlo a través de npm o yarn. Abre una terminal en la raíz de tu proyecto y ejecuta el siguiente comando:

```bash
npm install husky --save-dev
```

## Paso 2: Configuración de los Ganchos de Husky

Una vez que Husky está instalado, necesitas configurar los ganchos que se ejecutarán antes de ciertos eventos de Git. En este caso, vamos a configurar Husky para ejecutar las pruebas unitarias antes de cada confirmación. 

1. Crea un archivo llamado `.huskyrc` en la raíz de tu proyecto. Este archivo contendrá la configuración de los ganchos de Husky.

2. Abre `.huskyrc` en tu editor de texto y agrega lo siguiente:

```json
{
  "hooks": {
    "pre-commit": "npm test"
  }
}
```

En este ejemplo, estamos configurando el gancho `pre-commit` para que ejecute el comando `npm test` antes de cada confirmación.

## Paso 3: Configuración de las Pruebas Unitarias

Antes de continuar, asegúrate de tener configuradas tus pruebas unitarias en tu proyecto. Esto puede depender de las herramientas que estés utilizando, como Jest, Mocha, Jasmine, etc. Asegúrate de que el comando `npm test` esté configurado para ejecutar tus pruebas unitarias.

## Paso 4: Realizar una Confirmación

Con Husky configurado, ahora puedes probar si todo está funcionando correctamente. Realiza una confirmación en tu repositorio. Puedes hacerlo mediante la línea de comandos o a través de tu herramienta de control de versiones favorita.

```bash
git commit -m "Agregando nuevas funcionalidades"
```

Husky detectará la confirmación y automáticamente ejecutará las pruebas unitarias configuradas antes de completar la confirmación.