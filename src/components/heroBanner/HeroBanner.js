import React, {useState} from 'react';
import { Wrapper, WrapperLight, WrapperImage, WrapperDark, H1 } from './style';
import { ButtonBullet } from '../button/style';
import Title from '../title/Title';
import Button from '../button/Button';

export function HeroBanner({onClick}) {

    const title="Title";
    const btnText="Button text";

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Button onClick={onClick}>{btnText}</Button>
        </Wrapper>
    );
}

export function HeroBannerLight({onClick, btnText, title}) {
    return (
        <WrapperLight>
            <Title>{title}</Title>
            <Button onClick={onClick}>{btnText}</Button>
        </WrapperLight>
    );
}

export function HeroBannerDark({onClick, btnText, title}) {
    return (
        <WrapperDark>
            <Title reverse>{title}</Title>
            <Button reverse onClick={onClick}>{btnText}</Button>
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
            <ButtonBullet onClick={() => handleIndex(index + 1)}></ButtonBullet>
            <ButtonBullet onClick={() => handleIndex(index - 1)}></ButtonBullet>
        </Wrapper>
    );
}