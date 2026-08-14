# 🌍 TravelGo – Travel & Tourism Website 
 
TravelGo is a modern and responsive **Travel & Tourism Website** developed using **React.js, Vite, and Bootstrap 5**. 
 
The application allows users to explore destinations around the world, search and filter countries, view detailed destination information, explore travel packages, plan trips, and authenticate using Firebase. 
 
This project was developed as an **Internship / Minor Project** to demonstrate practical skills in modern frontend development, API integration, authentication, routing, reusable components, and responsive web design. 
 
--- 
## 🌐 Live Demo

🔗 [TravelGo – Live Website]()
 
## 🚀 Features 
 
### 🌍 Destination Exploration 
- Explore countries from around the world 
- Display country name 
- Display country flag 
- Display capital 
- Display region 
- Display population 
- View detailed information about each destination 
 
### 🔎 Search & Filtering 
- Search destinations by country name 
- Filter destinations by region 
- Dynamic filtering without reloading the page 
 
### 📍 Destination Details 
Each destination has a dedicated details page containing: 
- Country name 
- Country flag 
- Capital 
- Region 
- Population 
- Currency 
- Languages 
 
### 🗺️ Explore Map 
- Explore destinations using a map-based interface 
- Provides a visual way to explore travel locations 
 
### 🧳 Travel Packages 
- Display available travel packages 
- Present package information in a clean card-based layout 
 
### ✈️ Trip Planning 
- Users can plan their trip 
- Destination and traveller information can be submitted through the trip planning interface 
 
### 🔐 Firebase Authentication 
Firebase Authentication is integrated for user authentication. 
 
Users can: 
- Create an account 
- Login 
- Logout 
 
Authentication method: 
 
**Email & Password** 
 
### 📱 Responsive Design 
The website is designed to work on: 
 
- 💻 Desktop 
- 💻 Laptop 
- 📱 Mobile 
- 📱 Tablet 
 
Bootstrap's responsive grid system and CSS are used to create a mobile-friendly interface. 
 
--- 
 
# 🛠️ Technologies Used 
 
## Frontend 
 
- React.js 
- Vite 
- JavaScript (ES6+) 
- HTML5 
- CSS3 
- Bootstrap 5 
 
## Routing 
 
- React Router DOM 
 
## API Integration 
 
- Public Countries REST API 
- REST API data fetching using JavaScript `fetch()` 
 
## Authentication 
 
- Firebase Authentication 
- Email/Password Authentication 
 
## Development Tools 
 
- Visual Studio Code 
- Git 
- GitHub 
- npm 
- Vite 
 
## Deployment 
 
- Vercel 
 
--- 
 
# 📂 Project Structure 
 
```text 
travel-tourism/ 
── dist/              // Build output after npm run build
├── node_modules/
│ 
├── public/ 
│   ├── favicon.svg 
│   └── icons.svg 
│ 
├── src/ 
│   │ 
│   ├── components/ 
│   │   ├── CountryCard.jsx 
│   │   ├── Footer.jsx 
│   │   ├── Navbar.jsx 
│   │   ├── RegionFilter.jsx 
│   │   └── SearchBar.jsx 
│   │ 
│   ├── pages/ 
│   │   ├── About.jsx 
│   │   ├── Contact.jsx 
│   │   ├── DestinationDetails.jsx 
│   │   ├── Destinations.jsx 
│   │   ├── ExploreMap.jsx 
│   │   ├── Home.jsx 
│   │   ├── Login.jsx 
│   │   ├── NotFound.jsx 
│   │   ├── Packages.jsx 
│   │   ├── PlanTrip.jsx 
│   │   └── Signup.jsx 
│   │ 
│   ├── services/ 
│   │   ├── api.js 
│   │   └── firebase.js 
│   │ 
│   ├── App.jsx 
│   ├── main.jsx 
│   └── index.css 
│ 
├── .gitignore 
├── eslint.config.js 
├── index.html 
├── package.json 
├── package-lock.json 
├── vite.config.js 
└── README.md      
