import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/get-started'

export function GetStarted({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

GetStarted.Input = function GetStartedInput({children,...restProps}){
    return (
        <Input {...restProps}>{children}</Input>
    )
}

GetStarted.Button = function GetStartedButton({children, ...restProps}){
    return(
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="chevron-right"/>
        </Button>
    )
}

GetStarted.Text = function GetStartedText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

GetStarted.Break = function GetStartedBreak({children, ...restProps}){
    return(
        <Break {...restProps}>{children}</Break>
    )
}