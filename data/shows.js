const shows = [
    {
        id: 1,
        title: "Columbo",
        numSeasons: 10,
        desc: "Detective solves cases by asking for one more thing."
    }
];
let index = 1;
const getShows = () =>{
    return shows;
}

const addShow = (req) =>{
    const body = req.body;
    body.id = ++index;
    shows.push(body);
    return body;
}
const updateShow = (req) =>{
    const foundIndex = shows.findIndex((element) => req.body.id === element.id);
    let result;
    if(foundIndex == -1){
        shows.push(req.body);
        req.body.id = ++index;
        result = {
            notice: "No show with that id exists, created new show.",
            object: req.body
        }
    }else{
        shows.fill(req.body, foundIndex, foundIndex +1);
        result = shows[foundIndex];
    }
    return result;
}
const updateShowPortion = (req) =>{
    const foundIndex = shows.findIndex((element) => req.body.id === element.id);
    let result;
    let keyArray = [];
    if(foundIndex == -1){
        result = {error: "No show with that id exists." };
    }else{
        keyArray = Object.keys(req.body);
        keyArray.forEach((element) => shows[foundIndex][element] = req.body[element]);
        result = shows[foundIndex];
    }
    return result;
}
const removeShow = (req) =>{
    const foundIndex = shows.findIndex((element) => req.body.id === element.id);
    let result;
    if(foundIndex == -1){
        result = {error: "Id not found"};
    }else{
        result = shows[foundIndex];
        shows.splice(foundIndex,1);
    }
    return result;
}
module.exports = {
    getShows,
    addShow,
    updateShow,
    updateShowPortion,
    removeShow
};
