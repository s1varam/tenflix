import React from 'react'
import { Inner, Container, Pane, Title, Subtitle, Image, Item, AnimationWrapper, Animation, ImageWrapper } from './styles/jumbotron'


export function Jumbotron({children, direction,...restprops}){
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restprops}){
    return <Container{...restprops}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronPane({children, ...restprops}){
    return <Pane{...restprops}>{children}</Pane>;
}

Jumbotron.ImageWrapper = function JumbotronImageWrapper({children, ...restprops}){
    return <ImageWrapper{...restprops}>{children}</ImageWrapper>;
}

Jumbotron.AnimationWrapper = function JumbotronAnimationWrapper({children, ...restprops}){
    return <AnimationWrapper{...restprops}>{children}</AnimationWrapper>;
}

Jumbotron.Animation = function JumbotronAnimation({children, ...restprops}){
    return <Animation{...restprops}>{children}</Animation>;
}

Jumbotron.Title = function JumbotronTitle({children, ...restprops}){
    return <Title{...restprops}>{children}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restprops}){
    return <Subtitle{...restprops}>{children}</Subtitle>;
}

Jumbotron.Image = function JumbotronImage({...restprops}){
    return <Image{...restprops}/>;
}