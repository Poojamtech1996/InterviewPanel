import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function User() {
    const userdata = [
        {
            Name:"Test",
            Email:"test@test",
            Mobile:"986433566",
            Role:"Super Admin"
    
    } , 
        {
            Name:"Joe",
            Email:"joe@test",
            Mobile:"864433566",
            Role:" Admin"    
    
    } ,
         {
            Name:"Ely",
            Email:"ely@test",
            Mobile:"766433566",
            Role:"User"        
        }]

    return (
        <div>
            <form>
                <div>
                    <Row style={{ marginTop: '5px' }}>
                        <Col xs={6} className="mx-auto">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter Name" className="form-control" />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row style={{ marginTop: '5px' }}>
                        <Col xs={6} className="mx-auto">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Enter Email" className="form-control" />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row style={{ marginTop: '5px' }}>
                        <Col xs={6} className="mx-auto">
                            <label htmlFor="">Mobile</label>
                            <input type="text" placeholder="Enter Mobile" className="form-control" />
                        </Col>
                    </Row>
                </div>
                <div>
                <Row style={{ marginTop: '5px' }}>
                        <Col xs={6} className="mx-auto">
                <label htmlFor="">Role</label>
                <select style={{ width: 500 }} class="form-select form-select-md" aria-label=".form-select-lg example">
                    <option>Select Role</option>
                    <option value="">Super Admin</option>
                    <option value="">Admin</option>
                    <option value="">User</option>
                </select>
                </Col>
                    </Row>
            </div>
                <br />
                <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
            <br/>
      <Container>
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              userdata.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Mobile}</td>
                    <td>{item.Role}</td>
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

export default User;
