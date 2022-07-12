

const urlGetById = 'https://myeducationalproject01.uc.r.appspot.com/api/getOne';
const editButton = document.getElementById("edit-button");
const updateButton = document.getElementById("edit-anchor");

// get from sessionStorage
//console.log(typeof sessionStorage, sessionStorage)
//console.log(typeof sessionStorage, Object.values(sessionStorage))
//console.log(JSON.parse(Object.values(sessionStorage)[0]))
const legendData = JSON.parse(Object.values(sessionStorage)[0]);

//URL building
console.log(legendData)
const legendId = legendData._id;
console.log(legendId);
console.log(urlGetById +`/${legendId}`);

// rendering legend data on page
const displayOneLegend = (data) => {

    // let legendContainer = document.getElementsByClassName("legends-cards-container")[0];
    // const nameContainer = document.createElement("h3");
    // const lastNameContainer = document.createElement("h3");
    // let name = `${data.name}`;
    // let lastName = `${data.lastName}`;
    // nameContainer.textContent = name;
    // lastNameContainer.textContent = lastName;
    // legendContainer.appendChild(nameContainer);
    // legendContainer.appendChild(lastNameContainer);

    const legendContainer = document.getElementsByClassName("legends-cards-container")[0];
    const nameContainer = document.createElement("h3");
    const lastNameContainer = document.createElement("h3");
    const name = document.createTextNode(`${data.name}`);
    const lastName = document.createTextNode(`${data.lastName}`);
    nameContainer.appendChild(name);
    lastNameContainer.appendChild(lastName);
    legendContainer.appendChild(nameContainer);
    legendContainer.appendChild(lastNameContainer);

    // const nameContainer = document.getElementById("name-legend");
    // const lastNameContainer = document.getElementById("last-name-legend");
    // let name = `${data.name}`;
    // let lastName = `${data.lastName}`;
    // nameContainer.textContent = name;
    // lastNameContainer.textContent = lastName;
};

const loadOneLegend = (e) => {
    e.preventDefault();
    fetch(urlGetById + `/${legendId}`, {
    method: "GET"
    })
    .then(response => response.json())
    .then(data => displayOneLegend(data))
};

const changeToUpdatePage = () => {
    //e.preventDefault();
    window.location.href = `./update.html?update=${legendId}`;
}

editButton.addEventListener("click", e => {
    e.preventDefault();
    changeToUpdatePage;
})
// const updateLegend = (e) => {
//     e.preventDefault();
//     fetch(urlGetById + `/${legendId}`, {
//         method: "PATCH"
//     })
//};




window.onload = loadOneLegend;


