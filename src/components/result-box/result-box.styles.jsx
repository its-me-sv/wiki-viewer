import styled from "styled-components";

export const BoxResultStyles = styled.div`
    background-color: #161b22;
    border-radius: 2rem;
    padding: 20px;
    margin-top: 1.8rem;
    width: 84%;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background-color: #0d1117;
        border: 0.2rem solid rgb(28, 144, 221);
    }
`;

export const ResourceLinkStyles = styled.a`
    text-decoration: none;
    color: rgb(28, 144, 221);
    font-size: 1.4rem;
`;

export const ExtractStyles = styled.p`
    font-size: 1rem;
`;