const API = 'https://aihw-hospital-app.onrender.com/api/hospitals';

document.getElementById('hospitalSelector').addEventListener('change', function () {
    const selectedCode = this.value;
    if (selectedCode) {
        window.location.href = `edit.html?code=${selectedCode}`;
    }
});

function showMessage(type, text) {
    document.getElementById('response').innerHTML =
        `<div class="alert alert-${type}">${text}</div>`;
}

async function populateHospitalDropdown() {
    try {
        const res = await fetch(API);
        const hospitals = await res.json();

        const selector = document.getElementById('hospitalSelector');
        hospitals.forEach(h => {
            const option = document.createElement('option');
            option.value = h.code;
            option.textContent = `${h.name} (${h.code})`;
            selector.appendChild(option);
        });
    } catch (err) {
        showMessage('danger', 'Failed to load hospital list.');
    }
}

async function fetchHospital(code) {
    try {
        const res = await fetch(`${API}/${code}`);
        if (!res.ok) throw new Error('Hospital not found.');
        const hospital = await res.json();

        document.getElementById('name').value = hospital.name || '';
        document.getElementById('code').value = hospital.code || '';
        document.getElementById('val41').value = hospital.values?.[41] || '';
        document.getElementById('val42').value = hospital.values?.[42] || '';
        document.getElementById('val43').value = hospital.values?.[43] || '';

        showMessage('info', 'Hospital loaded.');
    } catch (err) {
        showMessage('danger', err.message);
    }
}

async function updateHospital(originalCode) {
    const name = document.getElementById('name').value.trim();
    const code = document.getElementById('code').value.trim();
    const val41 = parseFloat(document.getElementById('val41').value);
    const val42 = parseFloat(document.getElementById('val42').value);
    const val43 = parseFloat(document.getElementById('val43').value);

    if (!name || !code || isNaN(val41) || isNaN(val42) || isNaN(val43)) {
        return showMessage('danger', 'All fields must be filled correctly.');
    }

    const res = await fetch(`${API}/${originalCode}`, {
        method: 'PATCH',
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
        ? showMessage('success', 'Hospital record updated successfully.')
        : showMessage('danger', data.message || 'Update failed.');
}

document.addEventListener('DOMContentLoaded', async () => {
    await populateHospitalDropdown();

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
        document.getElementById('hospitalSelector').value = code;
        fetchHospital(code);
    }

    document.getElementById('edit-form').addEventListener('submit', e => {
        e.preventDefault();
        updateHospital(code);
    });
});

