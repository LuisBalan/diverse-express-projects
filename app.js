const artistName = document.getElementById('name-input');
const artistLastName = document.getElementById('last-name-input');
const artistAge = document.getElementById('age-input');
const urlPost = "localhost:3000/api/post/";

console.log(artistName.value, artistLastName.value, artistAge.value);

const getNameValue = () => {
    artistName.addEventListener("change", (event) => {
        console.log(artistName.value)
    })
}

getNameValue()

const postNewItem = () => {

    const newItem = {
        name: artistName.value,
        lastName: artistLastName.value,
        age: artistAge.value
    };

    const xhr = XMLHttpRequest();

     xhr.addEventListener("readystatechange", () => {
         console.log(xhr.readyState)
         if(xhr.readyState === 4 && xhr.status === 200){
             console.log(xhr)
             const bodyRequest = JSON.stringify(newItem);
         }else{
             console.error('An error ocurred!')
         }});

    xhr.open("POST", urlPost, true);
    xhr.send(bodyRequest);
};



