const result = document.querySelector("#result");
const btn = document.querySelector("#nextBtn");

const getJoke = function(){

    result.classList.add('hide')

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then(data => data.json())
    .then(e => {
        // console.log(typeof e)

        result.classList.remove("hide")

        result.innerHTML = e.joke;
    })
}

getJoke()

setInterval(getJoke,15000)

btn.addEventListener("click",getJoke)