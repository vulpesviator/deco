import React from 'react';
import { Container, Header, Message, Segment } from 'semantic-ui-react';
import ImageCarousel from '../components/ImageCarousel';

function Art() {
    return (
        <Container style={{ margin: 20 }}>
          <Segment attached="top">
            <Header as="h2" content="Image carousel" />
            <p>
              This prototype features how to create a carousel with the{" "}
              <code>Image</code> component, take a look into{" "}
              <code>examples/ImageCarousel</code> to get more details.
            </p>
          </Segment>
    
          <Segment attached="bottom">
            <ImageCarousel />
          </Segment>
        </Container>
      );
}

export default Art;