import React from 'react';

import './result-box.styles.css';

const ResultBox = ({pageid, title, extract}) => {
    return (
        <div className="box-result">
            <a href={`https://en.wikipedia.org/?curid=${pageid}`}>{title}</a>
            <p className="extract">{extract}</p>
        </div>
    );
};

export default ResultBox;