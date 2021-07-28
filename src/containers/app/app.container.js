import React from 'react';
import {connect} from 'react-redux';

import './app.styles.css';

// Custom Components
import Header from '../../components/header/header.component';
import RandomPageButton from '../../components/random-page-button/random-page-button.component';
import SearchBox from '../../components/search-box/search-box.component';
import ResultContainer from '../../components/result-container/result-container.component';

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
        return (
            <div className="app-container">
                <Header />
                <RandomPageButton />
                <SearchBox />
                <ResultContainer />
            </div>
        );
    }
}

const mapStateToProps = ({searchField}) => ({
    searchFieldText: searchField.searchFieldText
});

const mapDispatchToProps = dispatch => ({
    onRequestWikipediaData: phrase => dispatch(requestWikipediaData(phrase))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);