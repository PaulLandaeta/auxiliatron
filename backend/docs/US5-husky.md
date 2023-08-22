# Tutorial: Configuración de Git Hooks para Ejecutar Unit Tests

En este tutorial, aprenderás cómo configurar Git Hooks para automatizar la ejecución de pruebas unitarias en un proyecto backend, sin utilizar Husky. Los Git Hooks son scripts personalizados que se ejecutan automáticamente en respuesta a eventos de Git, como confirmaciones, fusiones y más.

## Paso 1: Preparación del Proyecto

Asegúrate de tener instalado Git en tu sistema y que tu proyecto backend tenga una configuración adecuada para ejecutar las pruebas unitarias. Esto puede implicar tener las herramientas de prueba (por ejemplo, Jest, Mocha) configuradas y el comando para ejecutar las pruebas unitarias definido en tu `package.json`.

## Paso 2: Configuración del Git Hook

1. Abre una terminal en el directorio raíz de tu proyecto backend.

2. Accede al directorio `.git/hooks` en tu proyecto. Los hooks de Git se encuentran en este directorio.

```bash
cd .git/hooks
```

3. Crea un nuevo archivo llamado `pre-commit` en este directorio. Esto configurará un Git Hook que se ejecutará antes de cada confirmación.

```bash
touch pre-commit
```

4. Abre el archivo `pre-commit` en tu editor de texto favorito.

5. Agrega el siguiente contenido al archivo `pre-commit`:

```bash
#!/bin/bash

npm test
```

Este script ejecutará el comando `npm test` antes de cada confirmación.

6. Guarda el archivo y asegúrate de que tenga permisos de ejecución. Puedes otorgar permisos de ejecución utilizando el siguiente comando:

```bash
chmod +x pre-commit
```

## Paso 3: Verificación y Pruebas

Ahora, verifica que la configuración del Git Hook esté funcionando correctamente:

1. Realiza cambios en tu código en el proyecto backend.

2. Intenta realizar una confirmación usando Git. Puedes hacerlo a través de la línea de comandos:

```bash
git add .
git commit -m "Realizando cambios en el backend"
```

3. El Git Hook ejecutará automáticamente el comando `npm test`, que a su vez ejecutará tus pruebas unitarias. Si todo está configurado correctamente y las pruebas pasan, la confirmación se completará. Si las pruebas fallan, la confirmación será bloqueada.

## Consejos Adicionales

- Asegúrate de que el comando `npm test` en el script del Git Hook esté configurado para ejecutar las pruebas unitarias en el proyecto backend.

- Si estás utilizando un entorno diferente o herramientas específicas para las pruebas unitarias, asegúrate de que el comando en el script sea adecuado para tu caso.

- Si experimentas problemas, verifica los mensajes de error en la terminal y las salidas de las pruebas para identificar posibles problemas en la configuración.

## Conclusión

Has configurado exitosamente un Git Hook que automatiza la ejecución de pruebas unitarias en tu proyecto backend antes de cada confirmación. Esto te permitirá mantener la calidad del código y reducir la posibilidad de introducir errores en tu repositorio. ¡Ahora puedes desarrollar con más confianza y eficiencia!