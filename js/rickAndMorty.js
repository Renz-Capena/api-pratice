const btn = document.querySelector("#nextBtn")
const result = document.querySelector('#result')

const container = document.querySelector(".row")
const name = document.querySelector("#name");
const status = document.querySelector("#status");
const species = document.querySelector("#species");
const type = document.querySelector("#type");
const gender = document.querySelector("#gender");

const img = document.querySelector("#charImg")


const getData =async function(){

    let characterId = Math.floor(Math.random() * 826)

    // container.classList.add('hide')

    console.log(characterId)

    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(e => e.json())
    .then(data => {
        // console.log(data)
        name.textContent = data.name
        status.textContent = data.status
        species.textContent = data.species
        type.textContent = data.type
        gender.textContent = data.gender

        img.src=data.image

        // container.classList.remove('hide')

    })
}

getData();

btn.addEventListener('click',getData)