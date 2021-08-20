import React, { createContext, useState, useContext } from 'react';
import { Container, Frame, Item, Header, Body, Title, Inner } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return (<Title {...restProps}>{children}</Title>)
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggle, setToggle] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>

    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {

    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggle(toggle => !toggle)} {...restProps}>
            {children}
            {toggle ? (<img src="images/icons/close-slim.png" alt="close" />) : (<img src="images/icons/add.png" alt="add"/>)}
        </Header>
    )
}


Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggle, setToggle } = useContext(ToggleContext)
    return toggle ? (<Body {...restProps}>{children}</Body>) : null;
}


