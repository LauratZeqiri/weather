let weather = {
    apiKey : "8f17ebd6cc519c06bdb8f086ec0d8c0f",
    fetchWeather:function  (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        city + "&units=metric&appid=8f17ebd6cc519c06bdb8f086ec0d8c0f")
        .then((response) => response.json())
      
        .then((data) => this.displayWeather(data));
      //i morum te dhenat prej api dhe pastaj duhet ti shfaqum

    },
    displayWeather: function (data){
        const {name} = data;
            const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
      
        document.querySelector(".city").innerText = "Weather in" + " " +  name;
        document.querySelector(".icon").src =
        "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".desc").innerText =description;
        document.querySelector(".humidi").innerText = "Humidity: " +humidity + "%";
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)

    }
    //i morum te dhenat nga searchi 

};




document.querySelector(".btn").addEventListener("click", function(){
    weather.search();

    
    // let input = document.querySelector(".search-bar").value;
    // let ine = input;
    // weather.fetchWeather(ine)
    //mund ta bejm edhe ne kete menyr


    
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();

    }
})

weather.fetchWeather("Kosovo")