import React from 'react';
import { AccordionContainer } from '../containers/accordion';
import FooterContainer from '../containers/footer';
import { GetStartedContainer } from '../containers/get-started';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Homepage() {
    return (
        <>
            <JumbotronContainer />
            <AccordionContainer />
            <GetStartedContainer />
            <FooterContainer />
        </>
    )
}