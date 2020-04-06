console.log('Hello from shows.js');
const deleteButtons = document.getElementsByClassName('delete');

const deleteHandler = (event) => {
    console.log("ID: ", event.target.id);
    fetch(`/api/shows/${event.target.id}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/shows'));   //window.location allows us to redirect
}

for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteHandler);
}


fetch('/api/shows')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })