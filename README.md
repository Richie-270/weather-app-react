# 🌤️ Weather App

Aplicación del clima en tiempo real construida con **React**, **Vite** y **Zustand**, consumiendo la API de **OpenWeatherMap**. Permite buscar cualquier ciudad del mundo y obtener información meteorológica actualizada.

🔗 **Demo en vivo:** [weather-app-react-alpha-one.vercel.app](https://weather-app-react-alpha-one.vercel.app)

---

## ✨ Características

- Búsqueda de clima por nombre de ciudad
- Datos en tiempo real: temperatura, humedad, descripción del clima e ícono del estado
- Estado global manejado con **Zustand**
- Persistencia del último resultado con `persist` middleware
- Diseño responsivo con **Tailwind CSS**
- Desplegado en Vercel con variables de entorno seguras

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React | Librería UI |
| Vite | Bundler y servidor de desarrollo |
| Zustand | Manejo de estado global |
| Tailwind CSS | Estilos |
| OpenWeatherMap API | Datos meteorológicos en tiempo real |

---

## 📁 Estructura del proyecto

```
weather-app-react/
├── public/
├── src/
│   ├── components/       # Componentes React
│   ├── store/            # Store de Zustand
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Richie-270/weather-app-react.git

# 2. Entrar al directorio
cd weather-app-react

# 3. Instalar dependencias
npm install

# 4. Crear archivo de variables de entorno
cp .env.example .env
```

Agrega tu API key de OpenWeatherMap en el archivo `.env`:

```env
VITE_OPENWEATHER_API_KEY=tu_api_key_aqui
```

```bash
# 5. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

> Puedes obtener una API key gratuita en [openweathermap.org](https://openweathermap.org/api)

---

## 📦 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter con ESLint
```

---

## 🌐 Deploy

El proyecto está desplegado en **Vercel**. La variable de entorno `VITE_OPENWEATHER_API_KEY` está configurada directamente en el panel de Vercel para proteger la API key en producción.

---

## 👨‍💻 Autor

**Ricardo** — [@Richie-270](https://github.com/Richie-270) · [LinkedIn](https://linkedin.com/in/ricardodev27)
