Políticas de Acceso por Usuario

Este proyecto simula un equipo con tres roles definidos. A continuación se detallan los permisos y responsabilidades:

Roles

1. Líder del Proyecto
- Permisos:
  - Acceso total (admin del repositorio).
  - Puede hacer push directamente a cualquier rama, incluidas las protegidas.
  - Revisión y aprobación de Pull Requests (PRs).
  - Puede fusionar ramas.

2. Desarrollador
- Permisos:
  - Puede crear ramas nuevas (`feature/`, `bugfix/`, etc.).
  - Debe usar Pull Requests para fusionar a `develop` o `main`.
  - Puede hacer push a ramas no protegidas.

3. Colaborador Externo
- Permisos:
  - Solo puede hacer forks del repositorio.
  - Puede proponer cambios mediante Pull Requests.
  - No tiene permisos para hacer push directo.

Ramas protegidas
- `main` y `develop` son ramas protegidas.
- Solo el líder del proyecto puede hacer push directo.
