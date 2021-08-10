import wikipediaDataTypes from "./wikipedia-data.types";

const API_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';

export const fetchWikiSuccess = data => ({
    type: wikipediaDataTypes.FETCH_DATA_SUCCESS, 
    payload: data
});

export const fetchWikiFailure = error => ({
    type: wikipediaDataTypes.FETCH_DATA_FAILURE, 
    payload: error
});

const requestWikipediaData = phrase => dispatch => {
    dispatch({type:wikipediaDataTypes.FETCH_DATA_PENDING});
    const urlToFetch = API_URL + phrase;
    fetch(urlToFetch)
    .then(response => response.json())
    .then(data => dispatch(fetchWikiSuccess(data)))
    .catch(error => dispatch(fetchWikiFailure(error)));
};

export default requestWikipediaData;