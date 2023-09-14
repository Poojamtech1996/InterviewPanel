import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';



function Technology() {
  const techdata = [
    {Name:"React"} , {Name : "SQL"} , {Name : "Dot Net"}]
  return (

    <>
      <div >
        <h1><center>Manage Technology</center></h1>
      </div>
      <br />
            <div>
                <Row style={{ marginTop: '5px' }}>
                    <Col xs={6} className="mx-auto">
                        <label htmlFor="">Technology</label>
                        <input type="text" placeholder="Enter Technology Name" className="form-control" />
                    </Col>
                </Row>
            </div>
      <br />
      <div className="text-center">
        <button className='btn btn-dark'>Submit</button>
      </div>
      <br />
      <Container>
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              techdata.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td><Button>Edit</Button> <button type="button" class="btn btn-danger">Delete</button></td>
                    </tr>
                )
              })
            }

          </tbody>
        </Table>
    </Container>
    </>
  );
}

export default Technology;