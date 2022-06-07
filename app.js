const artistName = document.getElementById("name-input");
const artistLastName = document.getElementById("last-name-input");
const artistAge = document.getElementById("age-input");
const submitButton = document.getElementById("submit-button");
const urlPOST = "https://myeducationalproject01.uc.r.appspot.com/api/post";
const urlGetAll = 'https://myeducationalproject01.uc.r.appspot.com/api/getAll';


// const getNameValue = () => {
    //     artistName.addEventListener("change", (event) => {
        //         console.log(artistName.value)
        //     })
        // }
        
        // getNameValue()
    
    const getAllLegends = () => {
        fetch(urlGetAll, {
            method: "GET",
            
        })
    }
        
        
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
        .then(setTimeout(() => alert(`New element succesfully submitted!`), 1000))
        .catch(err => console.log(err));
};

submitButton.addEventListener("click", postNewItem);



