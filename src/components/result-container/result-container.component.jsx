import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    ResultContainerStyles,
    ErrorStyles
} from './result-container.styles';

// Custom components
import ResultBox from '../result-box/result-box.component';

// Resources from assests
import {ReactComponent as Loader} from '../../assets/Loader.svg';

const ResultContainer = ({fetchedData, error, isPending}) => {
    return (
        <ResultContainerStyles>
            {
                isPending === false 
                ? "query" in fetchedData
                ? Object.values(fetchedData.query.pages).map(
                    (obj, idx)=> <ResultBox key={idx} {...obj}/>)
                : <ErrorStyles>No Result Found</ErrorStyles>
                : isPending === true && <Loader />
            }
        </ResultContainerStyles>
    );
};

const mapStateToProps = ({wikipediaData}) => ({
    fetchedData: wikipediaData.fetchedData,
    error: wikipediaData.error,
    isPending: wikipediaData.isPending
});

export default connect(mapStateToProps)(ResultContainer);