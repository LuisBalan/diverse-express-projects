const artistName = document.getElementById('name-input');
const artistLastName = document.getElementById('last-name-input');
const artistAge = document.getElementById('age-input');
const submitButton = document.getElementById('submit-button');
const urlPOST = "localhost:3000/api/post/";

console.log(artistName.value, artistLastName.value, artistAge.value);

// const getNameValue = () => {
//     artistName.addEventListener("change", (event) => {
//         console.log(artistName.value)
//     })
// }

// getNameValue()

const postNewItem = () => {

    const xhr = XMLHttpRequest();
    console.log(xhr)
    
    xhr.addEventListener("readystatechange", () => {
         console.log(xhr.readyState)
         if(xhr.readyState === 4 && xhr.status === 200){
             console.log(xhr);

             const bodyRequest = {
                 name: artistName.value,
                 lastName: artistLastName.value,
                 age: artistAge.value
             };
             xhr.open("POST", urlPOST, true)
             xhr.send(bodyRequest);    
            }else{
             console.error('An error ocurried!');
         };
    });
};

submitButton.addEventListener("click", postNewItem);



