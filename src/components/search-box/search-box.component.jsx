import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    FieldStyles,
    FieldLabelStyles,
    InputFieldStyles
} from './search-box.styles';

// Redux Actions
import {onSearchFieldChange} from '../../redux/search-field/search-field.actions';
import requestWikipediaData from '../../redux/wikipedia-data/wikipedia-data.actions';

const SearchBox = ({searchFieldText, onSearchFieldChange, onRequestWikipediaData}) => {
    return (
        <FieldStyles>
            <FieldLabelStyles>Search Article</FieldLabelStyles>
            <InputFieldStyles
                type="text"
                placeholder="Eg: Javascript"
                value={searchFieldText}
                onChange={
                    event => {
                        onRequestWikipediaData(event.target.value);
                        onSearchFieldChange(event);
                    }
                }
            />
        </FieldStyles>
    );
};

const mapStateToProps = ({searchField}) => ({
    searchFieldText: searchField.searchFieldText
});

const mapDispatchToProps = dispatch => ({
    onSearchFieldChange: event => dispatch(onSearchFieldChange(event)),
    onRequestWikipediaData: phrase => dispatch(requestWikipediaData(phrase))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);