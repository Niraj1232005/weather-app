🌤 AeroCast
===========================

This project is a modern weather application built using Node.js, Express, and EJS. It provides real-time weather updates with a clean UI and dynamic features.

* * * * *

📋 Features
-----------

-   🌍 Country → State → City selection (API based)

-   🔍 Searchable custom dropdowns

-   🌡 Real-time weather data

-   🌈 Dynamic background based on weather

-   🌙 Day/Night auto theme

-   🎨 Glassmorphism UI

-   🔐 Secure API key using `.env`

* * * * *

🛠️ Setup Guide
---------------

* * * * *

### 1\. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

* * * * *

### 2\. Install Dependencies

```
npm install
```

* * * * *

### 3\. Generate API Key (IMPORTANT 🔐)

-   Go to 👉 <https://openweathermap.org/api>

-   Sign up / login

-   Go to **API Keys section**

-   Generate a new API key

* * * * *

### 4\. Create `.env` File

In the root folder (same as `index.js`), create:

```
.env
```

Add your API key:

```
API_KEY=your_api_key_here
```

⚠️ Important:

-   Do NOT add spaces

-   Do NOT upload `.env` to GitHub

* * * * *

### 5\. Run the Application

```
node index.js
```

* * * * *

### 6\. Open in Browser

```
http://localhost:3000
```

* * * * *

🌐 Usage
--------

1.  Select **Country**

2.  Select **State**

3.  Select **City**

4.  Click **Get Weather**

5.  View real-time weather data

* * * * *

📂 Project Structure
--------------------
```
weather-app/
├── public/
│   ├── styles/
│   │   └── main.css
│   └── script.js
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env (not uploaded)
└── README.md
```
* * * * *

✨ APIs Used
-----------

-   🌦 OpenWeather API (Weather data)

-   🌍 CountriesNow API (Country, State, City data)

* * * * *

🔐 Security Notes
-----------------

-   API key is stored in `.env`

-   `.env` is ignored using `.gitignore`

-   Never expose API keys in code

* * * * *

💡 Future Improvements
----------------------

-   📍 Auto-detect user location

-   📊 5-day weather forecast

-   🌗 Light/Dark toggle

-   ⚡ React frontend version

-   🚀 Deployment (Vercel / Render)

* * * * *

✨ Author
--------

**Niraj Rathod**
