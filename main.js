const input = document.querySelector(".input-field");
const shahar = document.querySelector(".flex-grow-1");
let current_time = document.querySelector('.current-time');
input.addEventListener( "keypress", (event) => {
    current_time.textContent = new Date().toLocaleTimeString().slice(0,5)
    if(event.keyCode === 13) {
        event.preventDefault();
        async function getresult(){
            
            let header = document.querySelector(".font-weight-bold")
            
            const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=615423b9df6b4348a9e5dc0901384fdc`);
            const result = await api.json();
            
            console.log(result)
            shahar.value = null
            
            const {main, name, sys, weather} = result;
            const {temp, humidity} = main;
            const {country} = sys;
            const {description} = weather[0];

            console.log(main, name, sys, weather);
            console.log(temp, humidity, country, description);

            let my_temp = Math.round(temp - 273.15);
            let my_humidity = humidity;
            let my_country = country;
            let my_description = description;

            let country_name = document.querySelector(".flex-grow-1");
            country_name.innerHTML = `${name}, ${my_country}`;
            header.textContent = `${my_temp}°C`;
            let parametr = document.querySelectorAll('.parametr');
            parametr[0].innerHTML = `${result.wind.speed} m/s`;
            parametr[1].innerHTML = `${my_humidity}%`;
            

            let small = document.querySelector(".small");
            small.textContent = `${my_description}`;

            let rasm = document.querySelector(".rasm");
            rasm.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        }
        getresult(); 
    } 
});
