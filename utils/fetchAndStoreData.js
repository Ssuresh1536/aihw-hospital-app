const axios = require('axios');
const Hospital = require('../models/Hospital');

const datasetIds = [41, 42, 43];

const selectedHospitals = {
  "H0619": "Princess Margaret Hospital for Children",
  "H0620": "King Edward Memorial Hospital",
  "H0621": "Sir Charles Gairdner Hospital",
  "H0625": "Swan District Hospital",
  "H0628": "Joondalup Health Campus (Public)",
  "H0632": "Royal Perth Hospital Wellington Street Campus",
  "H0633": "Fremantle Hospital and Health Service",
  "H0635": "Armadale-Kelmscott Memorial Hospital",
  "H0637": "Rockingham General Hospital",
  "H0639": "Peel Health Campus",
  "H0644": "Broome Hospital",
  "H0648": "Hedland Health Campus",
  "H0654": "Nickol Bay Hospital",
  "H0657": "Geraldton Hospital",
  "H0690": "Kalgoorlie Health Campus",
  "H0694": "Albany Hospital",
  "H0702": "Bunbury Hospital"
};

async function fetchAndStoreData() {
  const hospitalData = {};

  for (const id of datasetIds) {
    const url = `https://myhospitalsapi.aihw.gov.au/api/v1/datasets/${id}/data-items`;

    try {
      const res = await axios.get(url);
      const json = res.data;

      json.result.forEach(item => {
        const code = item.reporting_unit_summary?.reporting_unit_code;
        const value = parseInt(item.value);

        if (selectedHospitals[code]) {
          if (!hospitalData[code]) hospitalData[code] = { name: selectedHospitals[code], values: {} };
          hospitalData[code].values[id] = isNaN(value) ? 0 : value;
        }
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  await Hospital.deleteMany({});
  const bulk = Object.entries(hospitalData).map(([code, { name, values }]) => ({
    code,
    name,
    values
  }));

  await Hospital.insertMany(bulk);
  console.log("✅ Data fetched and stored in MongoDB.");
}

module.exports = fetchAndStoreData;