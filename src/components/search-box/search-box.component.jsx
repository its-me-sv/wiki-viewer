import React from 'react';
import {connect} from 'react-redux';

import './search-box.styles.css';

import {onSearchFieldChange} from '../../redux/search-field/search-field.actions';

const SearchBox = ({searchFieldText, onSearchFieldChange}) => {
    return (
        <div className="field">
            <span className="field-label">Search Article</span>
            <input
                type="text"
                className="input-field"
                placeholder="Eg: Javascript"
                value={searchFieldText}
                onChange={onSearchFieldChange}
            />
        </div>
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