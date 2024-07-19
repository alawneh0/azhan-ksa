const axios = require('axios');

const cities = {
  riyadh: { latitude: 24.7136, longitude: 46.6753 },
  jeddah: { latitude: 21.4858, longitude: 39.1925 },
  mecca: { latitude: 21.3891, longitude: 39.8579 },
  medina: { latitude: 24.5247, longitude: 39.5692 },
  dammam: { latitude: 26.4207, longitude: 50.0888 },
  khobar: { latitude: 26.2172, longitude: 50.1971 },
  tabuk: { latitude: 28.3834, longitude: 36.5662 },
  buraydah: { latitude: 26.3595, longitude: 43.9797 },
  hail: { latitude: 27.5114, longitude: 41.7208 },
  najran: { latitude: 17.4933, longitude: 44.1277 },
  abha: { latitude: 18.2164, longitude: 42.5047 },
  khamis_mushait: { latitude: 18.3054, longitude: 42.7291 },
  jizan: { latitude: 16.8892, longitude: 42.5511 },
  yanbu: { latitude: 24.0896, longitude: 38.0617 },
  al_qatif: { latitude: 26.5196, longitude: 50.0104 },
  jubail: { latitude: 27.0046, longitude: 49.6469 },
  al_hasa: { latitude: 25.3830, longitude: 49.5860 },
  arar: { latitude: 30.9753, longitude: 41.0381 },
  sakakah: { latitude: 29.9697, longitude: 40.2064 },
  al_bahah: { latitude: 20.0129, longitude: 41.4687 },
  al_kharj: { latitude: 24.1556, longitude: 47.3346 },
  taif: { latitude: 21.2854, longitude: 40.4260 }
  // Add other cities and their coordinates here if needed
};

async function getAzhanTimes(city) {
  const coordinates = cities[city.toLowerCase().replace(' ', '_')];

  if (!coordinates) {
    throw new Error('City not found. Please use a valid city name.');
  }

  const { latitude, longitude } = coordinates;

  const response = await axios.get(`https://api.aladhan.com/v1/timings`, {
    params: {
      latitude,
      longitude,
      method: 2 // Umm al-Qura University, Makkah
    }
  });

  const timings = response.data.data.timings;

  return [
    `Fajr: ${timings.Fajr}`,
    `Dhuhr: ${timings.Dhuhr}`,
    `Asr: ${timings.Asr}`,
    `Maghrib: ${timings.Maghrib}`,
    `Isha: ${timings.Isha}`
  ];
}

function getAvailableCities() {
  return Object.keys(cities).map(city => city.replace('_', ' '));
}

module.exports = {
  getAzhanTimes,
  getAvailableCities
};
