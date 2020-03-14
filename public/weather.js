

function initializeWeather(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=lake+mary,florida&appid=d2f10ea773ba94e3852b6e5e29c7691f",
        method: "GET",
    }).then(function(response){
        console.log(response);
        var temp = response.main.temp;
        console.log(temp);
        var fahrenheit = (temp-273.15)*(9/5)+32;
        console.log(fahrenheit);

        var f = Math.floor(fahrenheit);
        console.log(f);
        $("#temp").text(f);
    });
};

initializeWeather();