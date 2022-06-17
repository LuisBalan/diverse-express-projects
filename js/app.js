const artistName = document.getElementById("name-input");
const artistLastName = document.getElementById("last-name-input");
const artistAge = document.getElementById("age-input");

//const artistsContainer = document.getElementsByClassName("legends-cards-container");


const submitButton = document.getElementById("submit-button");
const urlPOST = "https://myeducationalproject01.uc.r.appspot.com/api/post";



// const getNameValue = () => {
    //     artistName.addEventListener("change", (event) => {
        //         console.log(artistName.value)
        //     })
        // }
        
        // getNameValue()
    
    // const getAllLegends = () => {
    //     fetch(urlGetAll, {
    //         method: "GET"
    //     })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    // }
        
        
    const postNewItem = async (e) => {
        e.preventDefault();
        let contentToPost = {
                name: artistName.value,
                lastName: artistLastName.value,
                age: artistAge.value
            };
            
           await console.log(contentToPost);
            
        fetch(urlPOST, {
            method: "POST",
            body: JSON.stringify(contentToPost),
            headers: {"Content-type": "application/json"}
        })
        .then(response => response.json())
        .then(json => console.log(json))
        //.then(setTimeout(() => {alert("New element successfully submitted!")}, 1000))  //this is correct in functionality
        .then(setTimeout(() => {alert("New element successfully submitted!", window.location.href = "../views/all_legends.html")}, 1000))
        ///.then(setTimeout(() => {alert("New element succesfully submitted!", window.location.href ="../views/all_legends.html")}, 800))
        //.then(alert("New element succesfully submitted!"))
        
        //.then(window.location=("../views/all_legends.html"))   fix for extra-functionality
        //
        .catch(err => console.log(err));
};

submitButton.addEventListener("click", postNewItem);



