const urlGetAll = 'https://myeducationalproject01.uc.r.appspot.com/api/getAll';
const artistsContainer = document.getElementById("legends-cards-container");

// rendering of data
const displayLegends = (data) => {
    console.log(data);
    let legendsContainer = document.createElement("ul");
    data.map((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        //const textNode = document.createTextNode(`Legend: ${item.name} ${item.lastName}, Age: ${item.age}`);
        a.textContent = `Legend: ${item.name} ${item.lastName}, Age: ${item.age}`;
        a.href = "https://www.w3schools.com/jsref/prop_anchor_href.asp";
        //a.append(textNode)
        li.appendChild(a);
        legendsContainer.appendChild(li);
    });
    artistsContainer.appendChild(legendsContainer);
    //document.body.appendChild(artistsContainer)
};

//request to DB
const loadLegends = (e) => {
    e.preventDefault();
        fetch(urlGetAll, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => displayLegends(data));
}

window.onload = loadLegends;
