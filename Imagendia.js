img = document.querySelector("#ImagenDia");
axios
    .get("https://api.nasa.gov/planetary/apod?api_key=V2Q42eIDgecYd9vn6Ji3SeIa9rlxSs91BXV6od9i"
    )
    .then(function(response) {
        console.log(response.data.url);
        img.src = response.data.url;
    })
    .catch(
        function(error) {
            console.log(error);
        }
    )
    .then(function(){
    })
btnapi = document.querySelector("#btnDescargar");
img = document.querySelector("#imagen")
