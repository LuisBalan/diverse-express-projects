const artistName = document.getElementById('name-input');
const artistLastName = document.getElementById('last-name-input');
const artistAge = document.getElementById('age-input');

console.log(artistName.value, artistLastName.value, artistAge.value);

const getNameValue = () => {
    artistName.addEventListener("change", (event) => {
        console.log(artistName.value)
    })
}

getNameValue()

const postData = () => {
     const xhr = XMLHttpRequest();
     xhr.addEventListener("readystatechange", () => {
         console.log(xhr.readyState)
     })
     xhr.onreadystatechange = () => {

     }
    xhr.open(
        "POST",
        "localhost:3000/api/post/",
        true
    )
};



