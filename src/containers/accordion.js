import Accordion from '../components/accordion'
import faqData from '../fixtures/faqs.json'

export function AccordionContainer(){
    return (
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            {
                faqData.map((data)=>(
                    <Accordion.Item key={data.key}>
                        <Accordion.Header>{data.header}</Accordion.Header>
                        <Accordion.Body>{data.body}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}