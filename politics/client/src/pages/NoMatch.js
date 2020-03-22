import React from "react";
import {  Container, Row, Card } from 'react-materialize';


function NoMatch() {
  return (
    <Container  >
      <Row>
      
          <Container className="center">
            <Row/>
            <Card className="black">
            <h1 className="white-text">404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            </Card>
          </Container>
   
      </Row>
    </Container>
  );
}

export default NoMatch;
