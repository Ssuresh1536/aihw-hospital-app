# WA Hospitals App

A fullstack web application for managing hospital data in Western Australia, built with:

- **Static Frontend** (HTML/CSS/JS) deployed on **Vercel**
- **Express + MongoDB Backend API** deployed on **Render**
- **Hospital data** sourced from the AIHW API and stored in **MongoDB Atlas**

---

## 🌐 Live Deployment

| Layer         | URL                                                                 |
|---------------|----------------------------------------------------------------------|
| Frontend      | [https://aihw-hospital-app.vercel.app](https://aihw-hospital-app.vercel.app) |
| Backend API   | [https://aihw-hospital-app.onrender.com/api/hospitals](https://aihw-hospital-app.onrender.com/api/hospitals) |

---

## 📁 Project Structure

aihw-hospital-app/
├── public/
│ ├── index.html # Main hospital data view
│ ├── edit.html # Update hospital fields (resus, emergency, urgency)
│ ├── upload.html # Form to add new hospital entries
│ ├── help.html # Help/FAQ page
│ ├── legal.html # Disclaimer and legal use info
│ ├── script.js # Main dynamic JS logic
│ ├── edit.js # Edit page functionality
│ └── upload.js # Upload page functionality
├── backend/
│ ├── server.js # Express server entry point
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route handlers
│ └── utils/ # Data fetching & seeding
├── hospitalData.json # Local mock dataset
├── style.css # Shared styling
├── package.json
└── README.md 

---

## 🧪 Features

- View, edit, delete, and add hospital data
- PATCH values like `resus`, `emergency`, and `urgency`
- RESTful API (CRUD) built with Express
- Instant frontend–backend interaction using `fetch`
- Deployed using Vercel (frontend) and Render (backend)

---

## 🛠 API Endpoints (Render)

| Method | Route                           | Description                             |
|--------|----------------------------------|-----------------------------------------|
| GET    | `/api/hospitals`                | List all hospitals                      |
| GET    | `/api/hospitals/:code`          | Get hospital by code                    |
| POST   | `/api/hospitals`                | Add a new hospital                      |
| PUT    | `/api/hospitals/:code`          | Replace entire hospital document        |
| PATCH  | `/api/hospitals/:code`          | Update specific fields (e.g. urgency)   |
| DELETE | `/api/hospitals/:code`          | Delete hospital by code                 |

---

## 🛠 Deployment Notes

### Frontend (Vercel)

- Folder deployed: `/public/`
- No framework or build tool required
- Each `.html` file is standalone and fetches data directly from the backend

### Backend (Render)

- Hosted with `server.js` running from `/backend/`
- Environment variables managed via Render dashboard
- MongoDB Atlas URI stored securely as `MONGODB_URI`

---

## ⚙️ Development

### Start Backend Locally

```bash
cd backend
npm install
node server.js

View frontend Locally: 
cd public
# Open HTML files in browser or use Live Server
open index.html

Assignment Requirements (Part 2)
1. Backend Web Application
Full backend built with Node.js + Express.js

RESTful API with full CRUD

Secure connection to MongoDB Atlas

2. Minimum of 10 Files 
| File                | Type | Description                                      |
| ------------------- | ---- | ------------------------------------------------ |
| `index.html`        | HTML | View all hospitals from API                      |
| `edit.html`         | HTML | Edit hospital values (resus, emergency, urgency) |
| `upload.html`       | HTML | Add new hospital entries                         |
| `help.html`         | HTML | User help and instructions                       |
| `legal.html`        | HTML | Legal disclaimers and data source info           |
| `style.css`         | CSS  | Styling for all pages                            |
| `script.js`         | JS   | Shared JS logic and dynamic rendering            |
| `edit.js`           | JS   | Logic for editing hospital data                  |
| `upload.js`         | JS   | Logic for form submission                        |
| `hospitalData.json` | JSON | Mock data used during development                |
3. Database Integration
MongoDB Atlas with Mongoose models

CRUD operations:

GET /api/hospitals

POST, PATCH, PUT, DELETE /api/hospitals/:code

4. Cross-Browser Compatibility
Tested successfully on:

Chrome (Windows, Android)

Firefox (Windows, iOS)

All pages function correctly for layout, form input, and API calls.

5. REST API Implementation
Endpoints confirmed using:

Postman

Browser fetch()

curl in PowerShell

Live web frontend

6. Data Persistence
POST → Adds new hospital to MongoDB

PATCH → Updates urgency, emergency, resus fields

DELETE → Removes hospital by code

Indexes on:

code (unique identifier)

name (search optimization)

7. JavaScript Integration
Client-side:

Dynamic rendering with fetch() and DOM updates

Input validation on forms

Server-side:

Express API returns JSON for each operation

Console logging and dev tools used for debugging

8. Deployment + Feedback
✅ Backend deployed to:
https://aihw-hospital-app.onrender.com

✅ Frontend deployed to:
https://aihw-hospital-app.vercel.app

Help and Legal pages included for user clarity and data transparency

📄 Legal
All hospital data sourced from the AIHW MyHospitals API

This project is for educational use only

Data is presented "as-is" and should not be used for real medical decisions