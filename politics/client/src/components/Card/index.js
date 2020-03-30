import React from 'react';
import {Card, Row, Col, Icon, CardTitle} from 'react-materialize';

const CardComponent = props => {
    return (
        <div>
            <Row>
            <Col
                m={6}
                s={12}
            >
                <Card
                actions={[
                    <a key="1" href="#">This is a Link</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                >
                Here is the standard card with an image thumbnail.
                </Card>
            </Col>
            </Row>
            
        </div>
    );
};


export default CardComponent;