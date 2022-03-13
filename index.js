const imageAuthor = document.getElementById("author")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `by ${data.user.name} (${data.user.username})`
    })
