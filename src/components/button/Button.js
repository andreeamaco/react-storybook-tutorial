import React from 'react';
import { StyledButton, StyledButtonSuccess, StyledButtonDanger } from './style';

function Button({onClick, reverse, children}) {
    return (
        <StyledButton reverse={reverse} onClick={onClick}>{children}</StyledButton>
    );
}

export function ButtonSuccess({onClick}) {
    return (
        <StyledButtonSuccess onClick={onClick}>Success button</StyledButtonSuccess>
    );
}

export function ButtonDanger({onClick}) {
    return (
        <StyledButtonDanger onClick={onClick}>Danger button</StyledButtonDanger>
    );
}

export default Button;