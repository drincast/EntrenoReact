import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { StlDivPrice, StlMessage, StlTxtPrice } from './ResultStyle';

// import styled from '@emotion/styled';

// export const StlMessage = styled.p
// `
//     background-color: rgb(127, 224, 237);
//     margin-top: 2rem;
//     padding: 1rem;
//     text-align: center;
// `

// export const StlTxtPrice = styled.p
// `
//     color: #00838f;
//     font-weight: bold;
//     padding: 1rem;
//     text-transform: uppercase;
//     margin: 0;
// `

// export const StlDivPrice = styled.div
// `
//     background-color: rgb(127, 224, 237);
//     border: 1px solid #26c6da;
//     padding: .5rem;
//     position: relative;    
//     margin-top: 1rem;
//     text-align: center;
// `

const Result = ({price}) => {
    return (
        price === 0 ?
            <StlMessage>elige marca, año y tupo de seguro</StlMessage>
        :
            <StlDivPrice>
                <TransitionGroup component={null}
                    className='resultado'>
                    <CSSTransition classNames='resultado'
                        key={price}
                        timeout={{enter: 500, exit: 500}}>
                        <StlTxtPrice>El total es:   ${price}</StlTxtPrice>
                    </CSSTransition>
                </TransitionGroup>                
            </StlDivPrice>            
    );
}

Result.propTypes = {
    price: PropTypes.number.isRequired
}

export default Result; 