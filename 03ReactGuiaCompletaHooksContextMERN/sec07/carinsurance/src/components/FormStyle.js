import styled from '@emotion/styled';

export const StlField = styled.div
`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

export const StlLabel = styled.label
`
    flex: 0 0 100px;
`

export const StlSelect = styled.select
`
    border: 1px solid #e1e1e1;
    display: block;
    padding: 1rem;
    width: 100%;
    -webkit-appearance: none;
`

export const StlInputRadio = styled.input
`
    margin: 0 1rem;
`

export const StlButtom = styled.button
`
    background-color: #00838f;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
    padding: 1rem;    
    text-transform: uppercase; 
    width: 100%;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`