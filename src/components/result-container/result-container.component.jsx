import React from 'react';
import {connect} from 'react-redux';

import './result-container.styles.css';

import ResultBox from '../result-box/result-box.component';

import {ReactComponent as Loader} from '../../assets/Loader.svg';

const ResultContainer = ({fetchedData, error, isPending}) => {
    return (
        <div className="result-container">
            {
                isPending === false 
                ? "query" in fetchedData
                ? Object.values(fetchedData.query.pages).map((obj, idx)=> <ResultBox key={idx} {...obj}/>)
                : <div className="error">No Result Found</div>
                : isPending === true && <Loader />
            }
        </div>
    );
};

const mapStateToProps = ({wikipediaData}) => ({
    fetchedData: wikipediaData.fetchedData,
    error: wikipediaData.error,
    isPending: wikipediaData.isPending
});

export default connect(mapStateToProps)(ResultContainer);