# Barça Blog — Mini Blog del FC Barcelona

## Nivel declarado: **Senior**

Este proyecto cumple todos los requerimientos de los niveles Junior, Mid y Senior.

## Tecnologías

- **Vite** (generado con `npm create vite@latest`)
- **React 18**
- **React Router DOM v6**
- **PropTypes** para validación de componentes


## Cómo correr el proyecto

### Requisitos
- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
# 1. Clonar el repositorio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
npm run preview
```

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx        
│   ├── PlayerCard.jsx    
│   └── StatCard.jsx      
├── context/
│   └── AppContext.jsx    
├── data/
│   └── players.js        
├── pages/
│   ├── Home.jsx         
│   ├── Players.jsx       
│   ├── PlayerDetail.jsx  
│   └── NotFound.jsx      
├── App.jsx               
├── main.jsx
└── index.css
```
*FC Barcelona · Més que un club · Ejercicio 4 React*
