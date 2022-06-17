const urlGetAll = 'https://myeducationalproject01.uc.r.appspot.com/api/getAll';
const artistsContainer = document.getElementById("legends-cards-container");

const loadLegends = (e) => {
    e.preventDefault();
    
    const displayLegends = (data) => {
        console.log(data)
        let legendsContainer = document.createElement("ul");
        data.map((item) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            const textNode = document.createTextNode(`Legend: ${item.name} ${item.lastName}, Age: ${item.age}`);
            a.append(textNode)
            li.appendChild(a);
            legendsContainer.appendChild(li);
        });
        artistsContainer.appendChild(legendsContainer);
        //document.body.appendChild(artistsContainer)
    };

        fetch(urlGetAll, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => displayLegends(data));
}

window.onload = loadLegends;
