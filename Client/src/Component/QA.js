import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QA() {
    return (
        <div>
            <br />
            <div>
                <Row style={{ marginTop: '5px' }}>
                    <Col xs={6} className="mx-auto">
                        <label htmlFor="">Question</label>
                        <input type="text" placeholder="Enter Question" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div>
                <Row style={{ marginTop: '5px' }}>
                    <Col xs={6} className="mx-auto">
                        <label className="form-label">Answer</label>
                        <textarea style={{ width: 800 }} placeholder="Enter Answer" className="form-control" rows="8"></textarea>
                    </Col>
                </Row>
            </div>
            <br />
            <div className="text-center">
                <button className="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default QA
