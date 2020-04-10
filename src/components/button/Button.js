import React from 'react';
import { StyledButton, StyledButtonSuccess, StyledButtonDanger } from './style';

function Button({onClick, reverse, children}) {
    return (
        <StyledButton reverse={reverse} onClick={onClick}>{children}</StyledButton>
    );
}

export function ButtonSuccess({onClick, children}) {
    return (
        <StyledButtonSuccess onClick={onClick}>{children}</StyledButtonSuccess>
    );
}

export function ButtonDanger({onClick, children}) {
    return (
        <StyledButtonDanger onClick={onClick}>{children}</StyledButtonDanger>
    );
}

export default Button;