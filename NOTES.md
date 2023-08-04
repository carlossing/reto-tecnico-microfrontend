# Gnx Prototipo

- https://nx.dev/concepts/more-concepts/micro-frontend-architecture

Para exportar los componentes de LIBS, se debe de exportar tb el componente.

````typescript
...
export * from './lib/button/button.component';
...
````

Crear otra aplicación o microfrontend

````shell
nx g @nx/angular:remote authentication --host=shell
````

Para corregir este error:

````markdown
nx Uncaught SyntaxError: Cannot use 'import.meta' outside a module
````

Usar este link:

https://github.com/nrwl/nx/issues/10017#issuecomment-1542329032

Build all Projecs:

`````shell
npx nx run-many --target=build --configuration=dev --all --parallel=7
`````

nx g @nx/angular:lib data-access-pokemon

nx g @nx/angular:service pokeapi --project data-access-pokemon

nx g @nx/angular:module login --project login --routing

nx g @nx/angular:component login --path=apps/login/src/app/login/components --project login --module=login --dry-run

nx serve shell --devRemotes=login,admin,users

