console.log('Hello from shows.js');
const deleteButtons = document.getElementsByClassName('delete');
const titleInput = document.getElementById('title');
const seasonsInput = document.getElementById('numSeasons');
const descInput = document.getElementById('desc');
const submit = document.getElementById('submit');


const submitHandler = (event) => {
    console.log("Attempt to submit");
    let subData = {
        'title': titleInput.value,
        'numSeasons' : seasonsInput.value,
        'desc' : descInput.value
    }
    fetch(`/api/shows/`, {
        method: 'POST',
         headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subData)
    }).then(() => window.location.replace('/shows'));
}
const deleteHandler = (event) => {
    console.log("ID: ", event.target.id);
    fetch(`/api/shows/${event.target.id}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/shows'));   //window.location allows us to redirect
}

for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteHandler);
}
submit.addEventListener('click', submitHandler);


fetch('/api/shows')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })