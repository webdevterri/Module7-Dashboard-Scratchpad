const imageAuthor = document.getElementById("author")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `by ${data.user.name} (${data.user.username})`
    })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`
    imageAuthor.textContent = `by Jezael Melgoza (jezar)`
  })
  
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
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