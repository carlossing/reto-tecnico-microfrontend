# Prueba Técnica

La capa Frontend del proyecto está construida con Angular, usando Angular CLI y NX como generador del proyecto, ya que recopila las mejores prácticas aplicadas al framework.
La aplicación al ser deployada genera archivos estáticos (html, CSS y JavaScript) que son servidos a través de una contenedor web usando Nginx.
El proyecto sigue los lineamientos del styleguide propuesto por la documentación oficial de Angular, Genia y lineamientos de Typescript propuestos por Microsoft.

## Getting Started

Estas instrucciones te permitirán tener una copia del proyecto funconando en un entorno local de desarrollo.

## Estructura del proyecto

```
Proyecto
|
├───apps/
│   ├───admin/
│   ├───admin-e2e/
│   ├───login/
│   ├───login-e2e/
│   ├───shell/
│   ├───shell-e2e/
│   ├───users/
│   └──users-e2e/
├───libs/
│   ├───app-config/
│   ├───authentication/
│   ├───ckeditor/
│   ├───client-users/
│   ├───shared/
│   └───shared-prime-ng/
├───.editorconfig
├───.eslintignore
├───.eslintrc.json
├───.gitignore
├───.npmrc
├───.prettierignore
├───.prettierrc
├───jest.config.ts
├───jest.preset.js
├───NOTES.md
├───nx.json
├───package.json
├───pnpm-lock.yaml
├───README.md
├───STYLEGUIDE.md
└───tsconfig.base.json
```

### Lineamientos

1. [Guía de estilo de Genia](STYLEGUIDE.md)
2. [Guía de estilo oficial de Angular](https://angular.io/guide/styleguide)
3. [Guía de estilo de Typescript](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
4. [Guía de estilo para unit tests](ut.md)

## Requisitos

1. Node 18.14+
2. Instalar `pnpm` con `npm install -g pnpm` (se recomienda ya que es más rápido que npm)
3. Instalar nx (```pnpm install --global nx@latest ```)

## Instalación

````shell
git clone <url repositorio> <carpeta>

cd <carpeta>

pnpm install
````

## Levantar el proyecto

````shell
nx serve shell --devRemotes=login,admin,users
````


## Construido con

- [Angular](https://angular.io) - Frontend Framework
- [PrimeNg](https://primeng.org/) - UI Framework
- [Nx](https://nx.dev/) - Monorepo Build System
- [npm](https://npmjs.org/) - Gestor de dependencias
- [pnpm](https://pnpm.io/es/) - Gestor de dependencias recomendado

## Autores

- **Carlos Sing** - _Initial work_
