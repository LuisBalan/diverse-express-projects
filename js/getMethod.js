const urlGetAll = 'https://myeducationalproject01.uc.r.appspot.com/api/getAll';
const artistsContainer = document.getElementById("legends-cards-container");

const loadLegends = (e) => {
    e.preventDefault();
    
    const displayLegends = (legendArray) => {
        let legendsContainer = document.createElement("ul");
        legendArray.map((item) => {
            const li = document.createElement("li");
            const textNode = document.createTextNode(`Legend: ${item.name} ${item.lastName}\nAge: ${item.age}`);
            li.appendChild(textNode);
            legendsContainer.appendChild(li);
        });
        artistsContainer.appendChild(legendsContainer);
        //document.body.appendChild(artistsContainer)
    };

        fetch(urlGetAll, {
            method: "GET"
        })
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(data => {
            console.log(data)
            let legendsContainer = document.createElement("ul");
            data.map((item) => {
                const li = document.createElement("li");
                const textNode = document.createTextNode(`Legend: ${item.name} ${item.lastName}\nAge: ${item.age}`);
                li.appendChild(textNode);
                legendsContainer.appendChild(li);
            });
            artistsContainer.appendChild(legendsContainer);
        })
        //.then(data => data.map(item => console.log(item)))
        //.then(data => displayLegends(data));
}

window.onload = loadLegends;
