# WA Pharmacies Upload & Management Web App

This project is a simple frontend-only web application to **view, upload, edit, and delete pharmacy records** locally in the browser. It uses a hardcoded pharmacy list and does not connect to a backend API, making it ideal for demo or testing purposes.

---

## Features

- Display a list of pharmacies (hardcoded in JavaScript)
- Upload new pharmacies with:
  - Unique pharmacy name
  - Unique pharmacy email
  - Operating hours for Mon–Fri, Sat, Sun-Ph
- Delete existing pharmacies by selecting their email
- Responsive UI built with Bootstrap 5
- Modal describing expected API endpoints (for future backend integration)

---

## Project Structure

- `index.html` — Home page displaying pharmacy data in a table
- `edit.html` — Edit existing pharmacy data (name, email, hours)
- `upload.html` — Upload new pharmacy or delete existing pharmacy
- `script.js` — JavaScript for `index.html` (loads pharmacy list)
- `edit.js` — JavaScript for `edit.html` (handles pharmacy editing)
- `upload.js` — JavaScript for `upload.html` (handles upload/delete with hardcoded list)

---

## Usage

1. Open `index.html` in a modern browser to view the pharmacy list.
2. Use `edit.html` to select a pharmacy and edit its details (local only).
3. Use `upload.html` to add a new pharmacy or delete an existing one.
4. All data is handled locally in-memory; no backend server or database is connected.

---

## How It Works

- The pharmacy list is stored as a hardcoded JavaScript array inside `upload.js`.
- Upload and delete operations update the local data only and print details to the browser console.
- UI feedback is given via Bootstrap alerts.
- The API modal describes expected endpoints for future backend connection but currently serves informational purposes.

---

## Future Improvements

- Connect to a backend API to persist data (MongoDB or other database).
- Replace hardcoded list with API calls.
- Implement user authentication for data modification.
- Add form validation and error handling enhancements.
- Allow bulk uploads via CSV or Excel files.

---

## Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (vanilla)
- Bootstrap 5 (for styling and responsive UI)

---

## How to Run

1. Download or clone the repository.
2. Open any of the HTML files (`index.html`, `edit.html`, or `upload.html`) in a modern web browser.
3. Interact with the UI — no installation or server required.

---

## Contact

For questions or support, please contact the project maintainer.

---

_This project is intended for demo/testing purposes only and does not persist data beyond the browser session._

## How to Use

Save rightclick.html and Authority_PrescriptionTEST.pdf in the same folder

Open rightclick.html in your browser

Select a pharmacy from the dropdown

Click Send Email

Outlook (or your default client) opens pre-filled

📎 Manually attach Authority_PrescriptionTEST.pdf

## Templateletter Generator - PDF- Email ## How to Use

## What It Does

Dropdown for inserting predefined clinical variables

Text box for free-typed notes

Dropdown of GP/pharmacy contacts

Generates PDF using jsPDF

Opens your email app using mailto: with pre-filled address, subject, and body

📎 Note: You’ll need to manually attach the PDF after it’s saved to your computer.
