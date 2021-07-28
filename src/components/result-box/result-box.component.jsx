import React from 'react';

// Styles
import {
    BoxResultStyles,
    ResourceLinkStyles,
    ExtractStyles
} from './result-box.styles';

const ResultBox = ({pageid, title, extract}) => {
    return (
        <BoxResultStyles>
            <ResourceLinkStyles 
                href={`https://en.wikipedia.org/?curid=${pageid}`}
                target="_blank"
                rel="noreferrer"
            >{title}</ResourceLinkStyles>
            <ExtractStyles>{extract}</ExtractStyles>
        </BoxResultStyles>
    );
};

export default ResultBox;