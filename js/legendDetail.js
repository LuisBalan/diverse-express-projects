
const urlGetById = 'https://myeducationalproject01.uc.r.appspot.com/api/getOne';

// get from localStorage
console.log(typeof localStorage, localStorage)
console.log(typeof localStorage, Object.values(localStorage))
console.log(JSON.parse(Object.values(localStorage)[0]))
let legendData = JSON.parse(Object.values(localStorage)[0]);

//URL building
console.log(legendData)
const legendId = legendData._id;
console.log(legendId);
console.log(urlGetById+`/${legendId}`)




// rendering legend data on page
const displayOneLegend = (data) => {
    const legendContainer = document.getElementsByClassName("legends-cards-container");

    const nameContainer = document.getElementsByClassName("name-legend");
    console.log(nameContainer)
    const lastNameContainer = document.getElementsByClassName("last-name-legend");
    console.log(lastNameContainer)

    //const nameContainer = document.createElement("h3");
    //const lastNameContainer = document.createElement("h3");
    let name = document.createTextNode(`${data.name}`);
    let lastName = document.createTextNode(`${data.lastName}`)
    //nameContainer.appendChild(name);
    //lastNameContainer.appendChild(lastName);

    //nameContainer.textContent = `${data.name}`;
    //lastNameContainer.textContent = `${data.lastName}`;
    //legendLastNameContainer.appendChild(lastName);
    legendContainer.appendChild(nameContainer);
    legendContainer.appendChild(lastNameContainer);
};




const loadOneLegend = (e) => {
    e.preventDefault();
    fetch(urlGetById+`/${legendId}`, {
    method: "GET"
    })
    .then(response => response.json())
    .then(data => displayOneLegend(data))
};


window.onload = loadOneLegend;


