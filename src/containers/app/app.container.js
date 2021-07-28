import React from 'react';
import {connect} from 'react-redux';

import './app.styles.css';

// Custom Components
import Header from '../../components/header/header.component';
import RandomPageButton from '../../components/random-page-button/random-page-button.component';
import SearchBox from '../../components/search-box/search-box.component';

import requestWikipediaData from '../../redux/wikipedia-data/wikipedia-data.actions';

class App extends React.Component {

    handleEnterKey = ({keyCode}) => {
        if (keyCode !== 13) return;
        const {onRequestWikipediaData, searchFieldText} = this.props;
        onRequestWikipediaData(searchFieldText);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleEnterKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleEnterKey);
    }

    render() {
        const {searchFieldText, wikiData} = this.props;
        console.log(wikiData);
        return (
            <div className="app-container">
                <Header />
                <RandomPageButton />
                <SearchBox />
                {
                    searchFieldText.length > 0 && wikiData
                    ? <h4>Results for: {searchFieldText} {JSON.stringify(wikiData)}</h4>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = ({searchField, wikipediaData}) => ({
    searchFieldText: searchField.searchFieldText,
    wikiFetching: wikipediaData.isPending,
    wikiError: wikipediaData.error,
    wikiData: wikipediaData.fetchedData
});

const mapDispatchToProps = dispatch => ({
    onRequestWikipediaData: phrase => dispatch(requestWikipediaData(phrase))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);