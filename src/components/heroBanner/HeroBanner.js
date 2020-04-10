import React from 'react';
import { Wrapper, WrapperLight, WrapperImage, WrapperDark, H1 } from './style';
import Title from '../title/Title';
import Button from '../button/Button';

export function HeroBanner({onClick, children, title}) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Button onClick={onClick}>{children}</Button>
        </Wrapper>
    );
}

export function HeroBannerLight({onClick, children, title}) {
    return (
        <WrapperLight>
            <Title>{title}</Title>
            <Button onClick={onClick}>{children}</Button>
        </WrapperLight>
    );
}

export function HeroBannerDark({onClick, children, title}) {
    return (
        <WrapperDark>
            <Title reverse>{title}</Title>
            <Button reverse onClick={onClick}>{children}</Button>
        </WrapperDark>
    );
}

export function HeroBannerImage({src, title}) {
    return (
        <Wrapper>
            <WrapperImage src={src} alt=""/>
            <H1>{title}</H1>
        </Wrapper>
    );
}