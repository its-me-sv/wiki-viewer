import wikipediaDataTypes from "./wikipedia-data.types";

const INITIAL_STATE = {
    fetchedData: null,
    error: null,
    isPending: null
};

const wikipediaDataFetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case wikipediaDataTypes.FETCH_DATA_PENDING:
            return {
                ...state, 
                ...{isPending: true}
            };
        case wikipediaDataTypes.FETCH_DATA_SUCCESS:
            return {
                ...state, 
                ...{isPending: false, error:false, fetchedData: action.payload}
            };
        case wikipediaDataTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                ...{isPending: false, error: action.payload}
            }
        default:
            return state;
    }
};

export default wikipediaDataFetchReducer;