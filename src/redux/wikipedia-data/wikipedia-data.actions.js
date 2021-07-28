import wikipediaDataTypes from "./wikipedia-data.types";

const API_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const API_CALL_BACK = '&callback=JSON_CALLBACK';

const requestWikipediaData = phrase => dispatch => {
    dispatch({type:wikipediaDataTypes.FETCH_DATA_PENDING});
    const urlToFetch = API_URL + phrase + API_CALL_BACK;
    fetch(urlToFetch)
    .then(response => response.json())
    .then(data => dispatch({type:wikipediaDataTypes.FETCH_DATA_SUCCESS, payload: data}))
    .catch(error => dispatch({type:wikipediaDataTypes.FETCH_DATA_FAILURE, payload: error}));
};

export default requestWikipediaData;