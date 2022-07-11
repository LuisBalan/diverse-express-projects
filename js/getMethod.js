const urlGetAll = 'https://myeducationalproject01.uc.r.appspot.com/api/getAll';
const artistsContainer = document.getElementById("legends-cards-container");


//click action in each legend
// const getDetailLegend = (e) => {
//     e.preventDefault();
//     location.href = './legend_detail.html'
// }

// rendering of data
const displayLegends = (data) => {
    console.log(data);
    let legendsContainer = document.createElement("ul");
    legendsContainer.style.listStyle = "none";
    data.map((item, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.style.cssText = 'color:white';
        a.textContent = `Legend: ${item.name} ${item.lastName}, Age: ${item.age}`;
        a.href = "./legend_detail.html";
        a.addEventListener('click', e => {
            e.preventDefault();
            localStorage.setItem('legendsData', JSON.stringify(data));
            window.location.href = `./legend_detail.html?legend=${item.name}${item.lastName}`;
        })
        li.appendChild(a);
        legendsContainer.appendChild(li);
    });
    artistsContainer.appendChild(legendsContainer); 
}

console.log(localStorage.length)

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
