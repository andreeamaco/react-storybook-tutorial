import React from 'react';
import { StyledButton, StyledButtonSuccess, StyledButtonDanger } from './style';

function Button({ handleClick }) {
    return (
        <StyledButton onClick={() => handleClick()}>This is a Button</StyledButton>
    );
}

export function ButtonSuccess() {
    return (
        <StyledButtonSuccess>This is a Button</StyledButtonSuccess>
    );
}

export function ButtonDanger() {
    return (
        <StyledButtonDanger>This is a Button</StyledButtonDanger>
    );
}

export default Button;