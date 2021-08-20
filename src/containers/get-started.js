import React from 'react';
import { GetStarted } from '../components/get-started';

export function GetStartedContainer(){
    return(
        <GetStarted>
            <GetStarted.Text>
            Ready to watch? Enter your email to create or restart your membership.
            </GetStarted.Text>
            <GetStarted.Break></GetStarted.Break>
            <GetStarted.Input placeholder="Email address">

            </GetStarted.Input>
            <GetStarted.Button>
                Get Started
            </GetStarted.Button>
        </GetStarted>
    )
}