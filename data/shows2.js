const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb+srv://jpeavler:pswrd@devenvironment-fxs3u.mongodb.net/media?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'media';


const getShows = () =>{
    const getPromise = new Promise((resolve, reject) =>{
        /* if(Error happens){   
                do a reject
        }else{
            resolve
        } */
    });
    return getPromise;
}

const addShow = (show) =>{
    const addPromise = new Promise((resolve, reject) => {

    });
    return addPromise;
}

const updateShow = (show) =>{
    const updatePromise = new Promise((resolve, reject) => {

    });
    return updatePromise;
}

const removeShow = (show) =>{
    const removeShow = new Promise((resolve, reject) => {

    });
    return removeShow;
}

module.exports = {
    getShows,
    addShow,
    updateShow,
    removeShow
};