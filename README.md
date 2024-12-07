# Empleados

## comandos
>- ng new empleados --standalone
>- css
>- cd empleados
>- codium .
>- npm install bootstrap
>- ng g c presentation/employees/list-employees
>- ng g c presentation/employees/create-employe
>- ng g c presentation/employees/navbar

## curso
>- https://www.udemy.com/course/app-empleado-angular-firebase/learn/lecture/23632176#overview

### instalar tailwin
>- https://tailwindcss.com/docs/guides/angular
>- npm install -D tailwindcss postcss autoprefixer
>- npx tailwindcss init

### tailwind.config.js
`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Asegúrate de que Tailwind analice todos los archivos HTML y TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`

### postcss.config.js
`
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`

### src/styles.css
`
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

`

### src/styles.scss
`
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`

## Sección 1: Introducción

### 1. Instalación Nodejs y Angular-cli

### 2. Nota

### 3. Creación del proyecto - Agregamos bootstrap

## Sección 2: App Empleados - Maquetación

### 4. Creación de componentes y servicio
>- https://getbootstrap.com/docs/5.3/components/navbar/

### 5. List Empleados HTML
>- https://getbootstrap.com/docs/5.3/components/navbar/
>- https://getbootstrap.com/docs/5.3/content/tables/

### 6. Agregamos imagen de fondo
>- https://uigradients.com/#SandtoBlue

### 7. Agregamos fontawesome - Iconos editar y eliminar
>- npm install @fortawesome/fontawesome-free
>- agregar a angular.json styles
>- npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
>- https://fontawesome.com/icons/trash-alt?style=solid&s=solid


### 8. Routing

### 9. Crear Empleado HTML

### 10. Configuración firebase
>- https://console.firebase.google.com/u/0/?pli=1
>- npm install firebase
>- https://github.com/angular/angularfire
>- ng add @angular/fire


### 11. Validamos formularios
>- https://getbootstrap.com/docs/5.3/components/alerts/


### 12. Agregamos empleado a firestore


### 13. Instalamos toastr
>- npm install ngx-toastr
>- 

### 14. Spinner
>- https://getbootstrap.com/docs/5.3/components/spinners/

### 15. List Empleados

### 16. Eliminar Empleado

### 17. Editar Empleado Parte 1

### 18. Editar Empleado Parte 2

### 19. Deploy

### 20. Despedida


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
