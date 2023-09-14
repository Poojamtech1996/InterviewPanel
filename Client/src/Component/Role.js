import {React} from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Role() {
    const roledata = [
        {Name:"Super Admin"} , {Name : "Admin"} , {Name : "User"}]

  return (
    <div>
        <br />
        <div>
                    <Row style={{ marginTop: '5px' }}>
                        <Col xs={6} className="mx-auto">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter Role Name" className="form-control" />
                        </Col>
                    </Row>
                </div>
      <br />
      <div className="text-center">
        <button className='btn btn-success'>Submit</button>
      </div>
      <br/>
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
              roledata.map((item, index) => {
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
    </div>
  )
}

export default Role;
