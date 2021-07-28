import {combineReducers} from "redux";

import searchFieldReducer from "./search-field/search-field.reducer";
import wikipediaDataFetchReducer from "./wikipedia-data/wikipedia-data.reducer";

const rootReducer = combineReducers({
    searchField: searchFieldReducer,
    wikipediaData: wikipediaDataFetchReducer
});

export default rootReducer;