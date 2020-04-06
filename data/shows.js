const shows = [
    {
        id: 1,
        title: "Columbo",
        numSeasons: 10,
        desc: "Show about solving cases by playing dumb."
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
        result = {notice: "No show with that id exists, created new show."}
    }else{
        shows.fill(req.body, foundIndex, foundIndex +1);
        result = shows[foundIndex];
    }
    return result;
}
module.exports = {
    getShows,
    addShow,
    updateShow
};
