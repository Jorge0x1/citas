La regla de oro: Cada vez que escribes código que interactúa con tu base de datos, APIs o estado global (por ejemplo, iniciar sesión, procesar pagos, consultar productos):

NO lo escribes dentro de mobile/web.

Lo escribes en packages/logic o packages/api como Custom Hooks o funciones exportables.

En mobile/web solo importas esa lógica y le pones la interfaz visual con HTML/CSS (Tailwind, componentes web, etc.).

Implementar sistema responive desde el comienzo 