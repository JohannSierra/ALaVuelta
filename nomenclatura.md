# Guía de Nomenclatura de Ramas

Para mantener un control organizado y coherente del desarrollo del proyecto, 
se utilizará la siguiente convención de nombres para las ramas:

Tipos de ramas

feature/: Se utiliza para el desarrollo de nuevas funcionalidades.
  - Ejemplo: `feature/login-form`, `feature/api-auth`

  bugfix/: Para corregir errores detectados en la versión actual.
  - Ejemplo: `bugfix/navbar-fix`, `bugfix/form-validation`

  hotfix/: Correcciones urgentes en producción.
  - Ejemplo: `hotfix/crash-on-load`, `hotfix/security-patch`

  release/: Para preparar una nueva versión que será lanzada.
  - Ejemplo: `release/v1.0.0`, `release/v2.1.5`

  main: Rama principal, contiene la última versión estable.

develop: Rama de integración donde se juntan los desarrollos antes de pasar a `main`.

Todos los nombres deben estar en minúsculas y separados por guiones.
