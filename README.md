# Weather Search App 🌦️

This is a responsive weather search app built using Vite, React, and Tailwind CSS. It allows users to search for weather information for a city, view current weather conditions, and manage recent search history. The app also includes Google OAuth 2.0 login for authentication and allows users to switch between Celsius and Fahrenheit units.

## Features ✨

- **Google OAuth 2.0 Login**: Allows users to securely sign in using their Google accounts.
- **Weather Search**: Users can search for a city by name to view current weather conditions.
- **Weather Details**: Displays temperature, weather conditions, and wind speed.
- **Unit Toggle**: Allows users to switch between Celsius and Fahrenheit.
- **Recent Searches**: Keeps track of the last five searches for easy access.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Error Handling**: Shows error messages when there is an issue with the API request or the city is not found.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Getting Started 🚀

Follow these steps to set up the project locally.

npm install
# or
yarn install

Go to the Google Cloud Console.
Create a new project or select an existing one.
Go to APIs & Services > Credentials.
Click Create Credentials and select OAuth client ID.
Set up OAuth consent screen and configure Authorized JavaScript origins to include http://localhost:5174 (or the port Vite is running on).
Copy the Client ID.


**Create a .env file in the root of the project with the following variables:**

**env**
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key

Run the App
npm run dev
# or
yarn dev

Dependencies 🛠️
**Vite: Fast and optimized frontend build tool.**
**React: JavaScript library for building user interfaces.**
**TypeScript: Adds static typing to JavaScript.**
Tailwind CSS: Utility-first CSS framework for styling.
Axios: For making HTTP requests to the OpenWeatherMap API.
Google OAuth: For Google sign-in functionality.
