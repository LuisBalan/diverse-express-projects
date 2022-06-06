const artistName = document.getElementById('name-input');
const artistLastName = document.getElementById('last-name-input');
const artistAge = document.getElementById('age-input');
const submitButton = document.getElementById('submit-button');
const urlPOST = "https://myeducationalproject01.uc.r.appspot.com/api/post";

console.log(artistName.value, artistLastName.value, artistAge.value);

// const getNameValue = () => {
//     artistName.addEventListener("change", (event) => {
//         console.log(artistName.value)
//     })
// }

// getNameValue()

const postNewItem = () => {

    let bodyRequest;
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.onload = () => {console.log("ready!")}
    xhr.addEventListener("readystatechange", () => {
         console.log(xhr.readyState)
         console.log(xhr.status)
         if(xhr.readyState === 4 && xhr.status === 200){
             console.log(xhr);

            bodyRequest = {
                 name: artistName.value,
                 lastName: artistLastName.value,
                 age: artistAge.value
             };
             console·log(bodyRequest);
             
            }else{
                console.error('An error ocurried!');
            };
        });

        console.log(bodyRequest)
        xhr.open("POST", urlPOST, true)
        xhr.send(JSON.stringify(bodyRequest));    
};

submitButton.addEventListener("click", postNewItem);



