# GitExplorer

Aplicación Angular para explorar usuarios y repositorios de GitHub.

## Descripción

GitExplorer es una aplicación web desarrollada con Angular que permite visualizar y explorar usuarios y sus repositorios. La aplicación consume datos desde una API externa y presenta la información en una interfaz moderna con diseño oscuro.

## Características

- **Vista de Usuarios**: Lista de usuarios con navegación maestro-detalle
- **Vista de Repositorios**: Grid de repositorios con navegación enrutada al detalle

## Tecnologías

- Angular 17.1.2
- Bootstrap 5.3.2
- TypeScript

## Instalación

```bash
npm install
```

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## Build

Ejecuta `ng build` para construir el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Tests

Ejecuta `ng test` para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io).

## Estructura del Proyecto

```
src/app/
├── user/
│   ├── user-list/          # Componente maestro-detalle de usuarios
│   └── user-detail/        # Detalle de usuario
├── repository/
│   ├── repository-list/    # Grid de repositorios
│   └── repository-detail/  # Detalle de repositorio (enrutado)
└── services/               # Servicios para consumo de API
```

## Autor
Angela Rocio Ospina Romero