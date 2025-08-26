# 🌦️ Weather Now - React + Vite

A modern, responsive weather forecasting web application built with **React** and **Vite**, using the **Open-Meteo API**. Get real-time weather updates for any city. This project demonstrates using **environment variables** to store API endpoints securely.

#User Persona

**Name:** Jamie  
**Occupation:** Outdoor Enthusiast  

**Need:**  
Jamie wants to check the current weather conditions quickly for any city.  

**Task:**  
Build an application for Jamie to quickly search and view weather details.  

**API to Use:**  
Open-Meteo API

## Features

- Search weather by city name.
- Displays:
  - Current temperature
  - Wind speed
- Error handling for invalid cities or API issues.
- Responsive UI with Tailwind CSS.
- Environment variable usage for API endpoint.

## Technologies Used
- **Frontend:** React 18+, Vite
- **Styling:** Tailwind CSS
- **API:** Open-Meteo API
- **State Management:** React `useState`, `useEffect`
- **Version Control:** Git & GitHub

Project Structure
weather-now/
├─ node_modules/
├─ public/             # Static assets
├─ src/
│  ├─ components/      # Reusable components
│  │  ├─ SearchBar.jsx
│  │  ├─ WeatherCard.jsx
│  │  └─ Loader.jsx
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx          # Main component
│  ├─ main.jsx         # Entry point
│  └─ styles/          # Tailwind/CSS files
├─ package.json
├─ vite.config.js
├─ .env                # Environment variables
└─ README.md

Component Flow
SearchBar → User enters city → Fetch geocoding → Fetch weather → WeatherCard displays data → Loader shows during fetch


## Installation

1. **Clone the repository:**

```bash``
git clone https://github.com/yourusername/weather-now.git
Navigate to the project directory:
cd /e/weather-now  # upadte it to your path

Install dependencies:
npm install

Start the development server:
npm run dev


Open the local URL provided (usually http://localhost:5173) in your browser.

deploy on netlify or StackBlitz
