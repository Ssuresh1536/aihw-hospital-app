const API = 'https://aihw-hospital-app.onrender.com/api/hospitals';  // Update this with your actual API URL

// Fetch all hospitals for deletion dropdown
async function loadHospitals() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        if (res.ok) {
            const deleteSelect = document.getElementById('delete-select');
            data.forEach(hospital => {
                const option = document.createElement('option');
                option.value = hospital.code;  // Assumes hospital code is unique
                option.textContent = `${hospital.name} (${hospital.code})`;
                deleteSelect.appendChild(option);
            });
        } else {
            showMessage('danger', 'Error loading hospitals for deletion.');
        }
    } catch (err) {
        showMessage('danger', 'Error fetching hospitals.');
    }
}

// Display messages on the UI
function showMessage(type, text) {
    document.getElementById('response').innerHTML = `<div class="alert alert-${type}">${text}</div>`;
}

// Handle form submission for uploading new hospital
document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const code = document.getElementById('code').value.trim();
    const val41 = parseFloat(document.getElementById('val41').value);
    const val42 = parseFloat(document.getElementById('val42').value);
    const val43 = parseFloat(document.getElementById('val43').value);

    if (!name || !code || isNaN(val41) || isNaN(val42) || isNaN(val43)) {
        return showMessage('danger', 'All fields must be filled correctly.');
    }

    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                code,
                values: {
                    41: val41,
                    42: val42,
                    43: val43
                }
            })
        });

        const data = await res.json();
        res.ok
            ? showMessage('success', 'Hospital uploaded successfully.')
            : showMessage('danger', data.message || 'Upload failed.');
    } catch (err) {
        showMessage('danger', 'Error uploading hospital.');
    }
});

// Handle hospital deletion
document.getElementById('delete-btn').addEventListener('click', async function () {
    const selectedCode = document.getElementById('delete-select').value;

    if (!selectedCode) {
        return showMessage('danger', 'Please select a hospital to delete.');
    }

    try {
        const res = await fetch(`${API}/${selectedCode}`, {
            method: 'DELETE'
        });

        const data = await res.json();
        res.ok
            ? showMessage('success', `Hospital with code ${selectedCode} deleted successfully.`)
            : showMessage('danger', data.message || 'Deletion failed.');
        
        // Reload hospitals after deletion to keep dropdown up-to-date
        loadHospitals();
    } catch (err) {
        showMessage('danger', 'Error deleting hospital.');
    }
});

// Load hospitals when page loads
window.onload = loadHospitals;
