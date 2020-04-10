import React from 'react';
import { Wrapper, WrapperLight, WrapperImage, WrapperDark } from './style';
import Title from '../title/Title';
import Button from '../button/Button';

export function HeroBanner({onClick}) {
    return (
        <Wrapper>
            <Title />
            <Button onClick={onClick}/>
        </Wrapper>
    );
}

export function HeroBannerLight({onClick}) {
    return (
        <WrapperLight>
            <Title />
            <Button onClick={onClick}/>
        </WrapperLight>
    );
}

export function HeroBannerDark({onClick}) {
    return (
        <WrapperDark>
            <Title reverse/>
            <Button reverse onClick={onClick}/>
        </WrapperDark>
    );
}

export function HeroBannerImage({src}) {
    return (
        <WrapperImage src={src} alt=""/>
    );
}