const BASE_API_URL = 'https://aihw-hospital-app.onrender.com/api/hospitals';

async function loadHospitals() {
  try {
    const res = await fetch(BASE_API_URL);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const hospitals = await res.json();

    const tableBody = document.getElementById('hospital-list');
    tableBody.innerHTML = '';

    hospitals.forEach(hospital => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${hospital.code}</td>
        <td>${hospital.name}</td>
        <td>${hospital.values["41"]}</td>
        <td>${hospital.values["42"]}</td>
        <td>${hospital.values["43"]}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error('Error loading hospitals:', err);
    const tableBody = document.getElementById('hospital-list');
    tableBody.innerHTML = `<tr><td colspan="5">Failed to load hospital data.</td></tr>`;
  }
}

loadHospitals();
