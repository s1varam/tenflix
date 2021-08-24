import React from 'react';
import { Jumbotron } from '../components/jumbotron';
import jumboJson from '../fixtures/jumbo.json'

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboJson.map((item) => (
        <Jumbotron
          key={item.id}
          direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.ImageWrapper>
              <Jumbotron.Image src={item.image} alt={item.alt} />
              <Jumbotron.AnimationWrapper>
              {/* <Jumbotron.Animation autoPlay playsInline muted loop>
                {item.video} &&
                <source src={item.videoURL} type="video/mp4">
                </source>
              </Jumbotron.Animation> */}
            </Jumbotron.AnimationWrapper>
            </Jumbotron.ImageWrapper>
            
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

