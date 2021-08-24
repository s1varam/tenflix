import React from 'react';
import Feature from '../components/feature';
import { AccordionContainer } from '../containers/accordion';
import FooterContainer from '../containers/footer';
import { GetStartedContainer } from '../containers/get-started';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Homepage() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <GetStartedContainer>
                        <GetStartedContainer.Input placeholder="Email address" />
                        <GetStartedContainer.Button>Try it now</GetStartedContainer.Button>
                        <GetStartedContainer.Break />
                        <GetStartedContainer.Text>Ready to watch? Enter your email to create or restart your membership.</GetStartedContainer.Text>
                    </GetStartedContainer>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <GetStartedContainer />
            <FooterContainer />
        </>
    )
}