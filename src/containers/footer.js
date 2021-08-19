import React from 'react';
import Footer from '../components/footer';

export default function FooterContainer(){
    return(
        <>
            <Footer>
                <Footer.Title>
                    Questions? Call 000-800-040-1843
                </Footer.Title>
                <Footer.Break></Footer.Break>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>                    
                        <Footer.Link href="#">Investor Relations</Footer.Link>                   
                        <Footer.Link href="#">Privacy</Footer.Link>                  
                        <Footer.Link href="https://fast.com" target="_blank">Speed Test</Footer.Link>
                    </Footer.Column>               
                    <Footer.Column>
                        <Footer.Link href="#">Help Center</Footer.Link>                   
                        <Footer.Link href="#">Jobs</Footer.Link>                    
                        <Footer.Link href="#">Cookie Preference</Footer.Link>                    
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Account</Footer.Link>                  
                        <Footer.Link href="#">Ways to Watch</Footer.Link>                  
                        <Footer.Link href="#">Corporate Information</Footer.Link>                   
                        <Footer.Link href="#">Only on Netflix</Footer.Link>
                    </Footer.Column>                
                    <Footer.Column>
                        <Footer.Link href="#">Media Center</Footer.Link>                   
                        <Footer.Link href="#">Terms of Use</Footer.Link>                    
                        <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Break></Footer.Break>
                <Footer.Text>
                    <Footer.Link href="#">
                        Netflix India
                    </Footer.Link>
                </Footer.Text>
            </Footer>
        </>
    );
}