const imageAuthor = document.getElementById("author")

// Background Image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `Photo by ${data.user.name} (${data.user.username})`
    })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`
    imageAuthor.textContent = `by Jezael Melgoza (jezar)`
  })

// Crypto Info
fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
      document.getElementById('crypto-top').innerHTML = `
        <img src=${data.image.small}>
        <span>${data.name}</span>
        `
      document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>🔼: $${data.market_data.high_24h.usd}</p>
        <p>🔽: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// Current Time
function getTime() {
    const date = new Date()
    document.getElementById("timeNow").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getTime, 1000);

// Weather API

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById("weather").innerHTML += `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}.png />                <p class="weather-temp">${Math.round(data.main.temp)}°</p>
            <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});