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

const SearchBox = ({searchFieldText, onSearchFieldChange}) => {
    return (
        <FieldStyles>
            <FieldLabelStyles>Search Article</FieldLabelStyles>
            <InputFieldStyles
                type="text"
                placeholder="Eg: Javascript"
                value={searchFieldText}
                onChange={onSearchFieldChange}
            />
        </FieldStyles>
    );
};

const mapStateToProps = ({searchField}) => ({
    searchFieldText: searchField.searchFieldText
});

const mapDispatchToProps = dispatch => ({
    onSearchFieldChange: event => dispatch(onSearchFieldChange(event))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);