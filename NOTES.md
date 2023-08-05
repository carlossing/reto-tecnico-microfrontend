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

**Build all Projects**:

`````shell
npx nx run-many --target=build --configuration=dev --all --parallel=7
`````
`````shell
## Libs
nx g @nx/angular:lib client-users
nx g @nx/angular:service users --project client-users --path=libs/client-users/src/lib/services
nx g @nx/angular:interface Users --project client-users --path=libs/client-users/src/lib/models --type=model

nx g @nx/angular:lib app-config

## Login


nx g @nx/angular:environments --project login
nx g @nx/angular:module login --project login --routing
nx g @nx/angular:component login --path=apps/login/src/app/login/components --project login --module=login --dry-run

nx g @nx/angular:service login --project login --path=apps/login/src/app/login/services

nx g @nx/angular:interface Authentication --project authentication --path=libs/authentication/src/lib/models --type=model

## Authentication
nx g @nx/angular:service authentication --project authentication --path=libs/authentication/src/lib/services
nx g @nx/angular:service jwt --project authentication --path=libs/authentication/src/lib/services
nx g @nx/angular:guard authentication --implements CanActivate --project authentication --path=libs/authentication/src/lib/guards

## Shared
nx g @nx/angular:service LocalStorage --project shared --path=libs/shared/src/lib/services
nx g @nx/angular:service Token --project shared --path=libs/shared/src/lib/interceptors
nx g @nx/angular:component menu --path=libs/shared/src/lib/components --project shared --dry-run

## Admin
nx g @nx/angular:module admin --project admin --routing
nx g @nx/angular:component admin --path=apps/admin/src/app/admin/components --project admin --module=admin --dry-run
nx g @nx/angular:environments --project admin
## Users
nx g @nx/angular:module users --project users --routing
nx g @nx/angular:component users-home --path=apps/users/src/app/users/components --project users --module=users --dry-run
nx g @nx/angular:environments --project users
## Shell

nx g @nx/angular:environments --project shell
nx serve shell --devRemotes=login,admin,users

`````
