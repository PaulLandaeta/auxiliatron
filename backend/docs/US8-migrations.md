# Tutorial: Uso de Migraciones de Knex para Crear una Tabla "Subject"

En este tutorial, aprenderás cómo usar las migraciones de Knex para crear una tabla llamada "Subject" en una base de datos. La tabla contendrá información en inglés, como el nombre de la materia, la descripción y el semestre.

## Paso 1: Creando una migración

1. Generar una nueva migracion para crear la tabla "Subjects":

```bash
npx knex migrate:make create_subjects_table
```

Esto creara un archivo de migracion en la carpeta `migrations` similar a este`20230821000000_create_subjects_table.js`.

2. Abrir el archivo y definir el esquema de la tabla:

```javascript
// migrations/20230821000000_create_subjects_table.js
exports.up = function (knex) {
  return knex.schema.createTable('subjects', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('semester').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('subjects');
};
```

## Paso 2: Ejecutar las migraciones

1. Ejecutar las migraciones para crear la tabla "Subjects" en tu base de datos:

```bash
npx knex migrate:latest
```

Esto ejecutara las migraciones.
