import searchFieldTypes from "./search-field.types";

export const onSearchFieldChange = event => ({
    type: searchFieldTypes.ON_SEARCH_FIELD_CHANGE,
    payload: event.target.value
});