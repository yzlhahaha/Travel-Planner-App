// Receive date information
function get_date() {
   return (new Date()).toLocaleDateString()
}

// Receive city information
const get_city_info = async (baseUrl, cityname, row_num, username) => {
    const response = await fetch(`${baseUrl}?q=${cityname}&maxRows=${row_num}&username=${username}`)
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// Receive weather information
const get_weather_info = async (baseUrl, lat, lon, api_key) => {
    const response = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&key=${api_key}`)
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// Receive image
const get_image = async (baseUrl, q, api_key) => {
    const response = await fetch(`${baseUrl}?key=${api_key}&q=${encodeURIComponent(q)}`)
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// Client side post request
const postData = async (url='', data={})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// function to update UI
const updateUI = async () => {
    const request = await fetch('/database');
    try{
      const allData = await request.json();
      document.getElementById('latitude').innerHTML = 'Latitude: ' + allData.lat;
      document.getElementById('longtitude').innerHTML = 'Longtitude: ' + allData.lng;
      document.getElementById('CountryName').innerHTML = 'CountryName: ' + allData.countryName;
      document.getElementById('countdown').innerHTML = `${document.getElementById('city_name').value.charAt(0).toUpperCase()}${document.getElementById('city_name').value.slice(1)}, ${allData.countryName} is ${allData.date} days away`;
      document.getElementById('precip').innerHTML = `Precipitation: ${allData.precip} mm/hr`;
      document.getElementById('pres').innerHTML = `Pressure: ${allData.pres} mb`;
      document.getElementById('temp').innerHTML = `Temperature: ${allData.temp} Celcius`;
      document.getElementById('inputimage').setAttribute("src", allData.image_url);
      document.getElementById('inputimage').setAttribute("style", "width:270px;height:180px;");
    }catch(error){
      console.log("error", error);
    }
}

const removeUI = async () => {
    document.getElementById("city_name").value = '';
    document.getElementById("tripdate").value = '';
    document.getElementById('latitude').innerHTML = '';
    document.getElementById('longtitude').innerHTML = '';
    document.getElementById('CountryName').innerHTML = '';
    document.getElementById('countdown').innerHTML = 'Countdown: ';
    document.getElementById('precip').innerHTML = '';
    document.getElementById('pres').innerHTML = '';
    document.getElementById('temp').innerHTML = '';
    document.getElementById('inputimage').setAttribute("src", '');
    document.getElementById('inputimage').setAttribute("style", '');
}

function heytrip() {
    const date = document.getElementById("tripdate").value;
    return date;
}

const clickevent = async() => {
    // get city information
    const cityname = document.getElementById("city_name").value;
    const url = "http://api.geonames.org/searchJSON"
    const max_row = 10;
    const username = "gaogaigar";
    const temp = await get_city_info(url, cityname, max_row, username);
    const f_temp = temp.geonames[0];
    // get date difference
    const start_date = new Date(get_date());
    const end_date = new Date(heytrip());
    const diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24));
    // get weather information
    const base_url = "http://api.weatherbit.io/v2.0/current"
    const api_key = "89d87561408b47319ed3c426a166a034"
    const temp_2 = await get_weather_info(base_url, f_temp.lat, f_temp.lng, api_key);
    const f_temp_2 = temp_2.data[0];
    // get image
    const baseurl = "https://pixabay.com/api/"
    const apikey = "17722926-bf5f07384f6016a64db20c5c0"
    const q = cityname;
    const temp_3 = await get_image(baseurl, q, apikey);
    const f_temp_3 = temp_3.hits[0];
    const image_url = f_temp_3.largeImageURL;
    // postdata and update UI
    try {
        postData('/database', {lat: f_temp.lat, lng: f_temp.lng, country: f_temp.countryName, date: diffDays,
        precip: f_temp_2.precip, pres: f_temp_2.pres, temp: f_temp_2.temp, image_url: image_url});
        updateUI();
    } catch(error) {
      console.log("error", error);
    }
}

const clickremove = async() => {
    try {
        removeUI();
    } catch(error) {
        console.log("error", error);
    }
}

export { get_date }
export { get_city_info }
export { get_weather_info }
export { get_image }
export { heytrip }
export { postData }
export { updateUI }
export { removeUI }
export { clickevent }
export { clickremove }