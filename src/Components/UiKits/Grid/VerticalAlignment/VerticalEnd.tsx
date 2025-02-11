import React from 'react'
import { Col, Row } from 'reactstrap'

const VerticalEnd = () => {
    return (
        <Col lg={4}>
            <Row className="grid-vertical align-items-end m-1 g-2 bg-light">
                <Col xs={6}>
                    <span className="bg-white">{'one column'}</span>
                </Col>
                <Col xs={6}>
                    <span className="bg-white">{'two column'}</span>
                </Col>
            </Row>
        </Col>

    )
}
export default VerticalEnd;