document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var location = document.getElementById('location').value;


    fetch(`http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${location}&days=5&aqi=no&alerts=no`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            console.log(data);

            
            var weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                <div>Temperature: ${data.current.temp_c}°C</div>
                <div>Condition: ${data.current.condition.text}</div>
                <div>Humidity: ${data.current.humidity}%</div>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            var weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `<p>Error fetching weather data</p>`;
        });
});