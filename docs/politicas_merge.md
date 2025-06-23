Políticas de Combinación de Ramas (Merge)

Para asegurar la estabilidad y calidad del código, se establecen las siguientes políticas de combinación:

Tipos de Merge Permitidos
- Se permitirá únicamente **Squash Merge** para mantener un historial limpio.

Requisitos para fusionar ramas
- Todas las Pull Requests deben:
  - Ser revisadas por al menos una persona autorizada.
  - Pasar las pruebas automáticas (si están configuradas).
  - Cumplir con los estándares de estilo de código.

Revisión obligatoria
- El líder del proyecto debe aprobar cualquier PR hacia `main`.
- Al menos una revisión de otro desarrollador para PRs hacia `develop`.
