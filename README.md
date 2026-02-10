# Prueba técnica de maquetación – Knowmadmood

## Descripción general

Esta prueba consiste en la **maquetación de una página de listado de posts**, siguiendo una estructura clara *(header, navegación, contenido principal y footer)*, con comportamiento **responsive** y **filtrado por categorías en cliente**.

El objetivo principal ha sido entregar una solución:
- **Clara** y **mantenible**
- **Accesible** para todos los usuarios
- Priorizando la **comprensión del código** y la **experiencia de usuario**
- Evitando soluciones excesivamente complejas

---

## Vista previa

**[Ver proyecto en vivo](https://r1ul09.github.io/PRUEBA_MAQUTACION_KNOWMADMOOD/)**
![Captura de pantalla del proyecto](assets/img/screenshot.png)

---

## Tecnologías utilizadas

- **HTML5** semántico
- **SCSS** (Sass) para estilos
- **JavaScript** vanilla *(sin librerías externas)*
- **Node.js** *(solo para compilación de SCSS)*
---

## Cómo ejecutar el proyecto

### Requisitos previos

- **Node.js** instalado
- Repositorio clonado en local

### Instalación

**1. Clonar el repositorio:**

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

**2. Instalar Sass globalmente** *(si no lo tienes ya)*:

```bash
npm install -g sass
```

### Ejecución

**Compilar SCSS una vez:**

```bash
sass sass/main.scss:css/style.css
```

**O compilar en modo watch:**

```bash
sass --watch sass/main.scss:css/style.css
```

Una vez compilado, **abrir el archivo `index.html` directamente en el navegador**.

---

## Estructura del proyecto

```
.
├── css/                  # CSS generado a partir de SCSS
│   └── style.css
├── js/                   # Lógica JavaScript (menú y filtrado)
│   └── main.js
├── sass/                 # Archivos fuente SCSS
│   ├── _variables.scss
│   ├── _header.scss
│   ├── _footer.scss
│   └── main.scss
├── assets/               # Recursos del proyecto
│   └── img/              # Imágenes
│       └── Knowmadmood.ico
│       └── screenshot.png
├── index.html            # Página principal
└── README.md             # Esta documentación
```
---

## Decisiones de layout

- **CSS Grid** para la estructura principal *(header, aside, main y footer)*
  - Permite una organización clara y fácil de mantener
  
- **Grid de tarjetas adaptable**
  - Se adapta automáticamente al tamaño de pantalla
  - Reduce la necesidad de múltiples media queries
  
- **Menú off-canvas en móvil**
  - El menú lateral se transforma en menú off-canvas
  - Prioriza el contenido principal en dispositivos pequeños

**Objetivo:** Equilibrio entre **simplicidad**, **flexibilidad** y **legibilidad** del código
---

## Enfoque de accesibilidad

La accesibilidad ha sido **tenida en cuenta desde el inicio**, no como un añadido posterior.

### Decisiones aplicadas:

- **HTML semántico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Navegación estructurada** mediante listas (`<ul>`, `<li>`)
- **Atributos ARIA**: `aria-label`, `aria-controls`, `aria-expanded`, `aria-pressed`
- **Botón de menú** accesible y controlado por teclado
- **Imágenes** con atributos `alt` descriptivos
- **Controles interactivos** accesibles mediante teclado

### Objetivo:

Cumplir las **buenas prácticas de accesibilidad** siguiendo las recomendaciones generales de **WCAG**, dentro del alcance de una prueba de tiempo limitado.
---

## Enfoque de JavaScript

- **Simplicidad** como prioridad
  - Separación clara entre estructura *(HTML)*, presentación *(CSS/SCSS)* y comportamiento *(JS)*
  
- **Filtrado en cliente**
  - Los posts se filtran en cliente por simplicidad
  - El HTML es funcional incluso sin JavaScript
  
- **Sin dependencias externas**
  - No se han utilizado librerías externas
  - Reduce complejidad y dependencias innecesarias
---

## Posibles mejoras futuras

Con más margen, se podrían plantear mejoras como:

- **Modularizar aún más** el SCSS usando mixins y funciones adicionales
- **Mejorar transiciones** y microinteracciones
- **Persistencia del filtro** mediante `localStorage`
- **Cargar posts dinámicamente** desde una API o archivo JSON
- **Añadir tests básicos** de accesibilidad
- **Soporte multilenguaje**
- **Mejorar experiencia mobile** *(gestión de foco, animaciones avanzadas)*