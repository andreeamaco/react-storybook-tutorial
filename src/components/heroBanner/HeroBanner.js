import React, {useState} from 'react';
import { Wrapper, WrapperLight, WrapperImage, WrapperDark, H1, PaginationButton } from './style';
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

export function HeroBannerImage({state, title}) {

    state = {
        src: [
            'cat.jpg',
            'cat1.jpg',
            'cat2.jpg',
            'cat3.jpg'
        ],
    }

    const [index, handleIndex] = useState(0);
    
    return (
        <Wrapper>
            <WrapperImage src={state.src[index]} alt=""/>
            <H1>{title}</H1>
            <PaginationButton onClick={() => handleIndex(index + 1)}></PaginationButton>
            <PaginationButton onClick={() => handleIndex(index - 1)}></PaginationButton>
        </Wrapper>
    );
}