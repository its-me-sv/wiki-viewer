import React from 'react';

// Styles
import {RandomPageButtonStyles} from './random-page-button.styles';

const RandomPageButton = () => (
    <RandomPageButtonStyles
        href="https://en.wikipedia.org/wiki/Special:Random"
        className="random-button"
        target="_blank"
        rel="noreferrer"
    >Visit an random article</RandomPageButtonStyles>
);

export default RandomPageButton;