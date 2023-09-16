import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchRoleHook } from '../hooks/roleHook';
import { fetchUserHook, fetchUsers } from '../hooks/userHook';

function User() {
    const [user,setUser] = useState([])
    const [show, setShow] = useState(false);
    const [newUserData, setUserData] = useState({ name: "", email: "", mobile: 0, role: 0,password:"" })
    const [roleData, setRoleData] = useState("Intial")
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

useEffect(()=>{
fetchUsers().then(resp=>setUser(resp.data)).catch(err=>console.log("Error occured while fetching user",err))
},[show])

    const handleNewUser = (event) => {
        console.log("Data saved", newUserData)
        fetchUserHook(newUserData).then(res=>console.log("response",res)).catch(err=>console.log("error Occured while posting",err))
        setUserData({ name: "", email: "", mobile: 0, role: "",password:"" })
        fetchUsers().then(resp=>setUser(resp.data)).catch(err=>console.log("Error occured while fetching user",err))
        setShow(false)
    }

    const handleFetchRole = () => {
        const data = fetchRoleHook().then(res => setRoleData(res.data)).catch(err => console.log("Error occured while fetching role data", err));
        return;
    }
    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-around' >
                <div>
                    <h5>User List</h5>
                </div>
                <Button style={{ border: '2px solid #36c6d5', backgroundColor: 'white', color: 'black' }} onClick={(e) => { handleShow(e); handleFetchRole(e) }} size='sm'>
                    <AddIcon style={{ color: '#36c6d5' }} /> Add User
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <Row style={{ marginTop: 5 }}>
                                <Col xs={8} className="mx-auto d-flex">
                                    <label htmlFor="" className='mt-1'>Name </label>
                                    <input type="text" onChange={(event) => setUserData((prev) => ({ ...prev, name: event.target.value }))} value={newUserData.name} placeholder="Enter Name" className="form-control" style={{ marginLeft: 19 }} />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={8} className="mx-auto d-flex">
                                    <label htmlFor="" className='mt-1'>Password</label>
                                    <input type="password" onChange={(event) => setUserData((prev) => ({ ...prev, password: event.target.value }))} value={newUserData.password} placeholder="Enter Password" className="form-control" style={{ marginLeft: 12 }} />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={8} className="mx-auto d-flex">
                                    <label htmlFor="" className='mt-1'>Email</label>
                                    <input type="email" placeholder="Enter Email" onChange={(event) => setUserData((prev) => ({ ...prev, email: event.target.value }))} value={newUserData.email} className="form-control" style={{ marginLeft: 19 }} />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{ marginTop: 20 }}>
                                <Col xs={8} className="mx-auto d-flex">
                                    <label htmlFor="" className='mt-1'>Mobile</label>
                                    <input type="number" onChange={(event) => setUserData((prev) => ({ ...prev, mobile: event.target.value }))} value={newUserData.mobile} placeholder="Enter Mobile" className="form-control" style={{ marginLeft: 19 }} />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{ marginTop: 20, marginBottom: 10 }}>
                                <Col xs={6} className="mx-auto d-flex">
                                    <label htmlFor="" className='mt-1'>Role</label>
                                    <select onChange={(event) => setUserData((prev) => ({ ...prev, role: event.target.value }))} className="form-select form-select-md" aria-label=".form-select-lg example" style={{ marginLeft: 40, width: 'auto' }}>
                                    <option >Select role</option>
                                        {roleData!=="Intial" && roleData!=undefined ? roleData.map((item,index)=>
                                        <option value={item._id} key={item._id}>{item.role}</option>
                                        ) : "Loading..."}
                                    </select>
                                </Col>
                            </Row>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleNewUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <br />
            <Container>
                <Table hover size="lg">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user!==[] ? user.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}.</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <EditIcon style={{ color: '#36c6d5', marginRight: 13, cursor: 'pointer' }} />
                                            <DeleteIcon style={{ color: '#fb7070', cursor: 'pointer' }} /></td>
                                    </tr>
                                )
                            })
                        :"Loading..." }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default User;
