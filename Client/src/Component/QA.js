import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fechtTechnologies } from '../hooks/technologyHook';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function QA() {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    useEffect(() => {
        fechtTechnologies().then(resp => setTechnologies(resp.data)).catch(err => console.log("Error fetching error", err));
    }, [])


    const handleTechnologyChange = (event) => {
        setSelectedTechnology(event.target.value);
    };

    const handleSubmit = async () => {
        const data = {
            question,
            answer,
            technology: selectedTechnology
        }
        const result = await axios.post("http://localhost:8080/question/new", data).then(response => {
            if (response.data == "Question added successfully") {
                toast.success("Question added Successfully")
            }
        }).catch(err => console.log("Error", err))
        console.log("Result Post", result);
        setQuestion("");
        setAnswer("");
        setSelectedTechnology("");
    }

    return (
        <div>
            <br />
            <Toaster />
            <Row style={{ marginTop: '5px', marginBottom: '2%' }}>
                <Col xs={6} className="mx-auto">
                    <label htmlFor="technology" className='mb-2'><b>Technologies</b></label>
                    <select className="form-select" id="technology" value={selectedTechnology}
                        onChange={handleTechnologyChange}>
                        <option>Select Technology</option>
                        {technologies.length > 0
                            ? technologies.map(item => (
                                <option key={item._id} value={item.name}>
                                    {item.name}
                                </option>
                            ))
                            : <option>Loading...</option>}
                    </select>
                </Col>
            </Row>
            <div>
                <Row style={{ marginTop: '5px', marginBottom: '2%' }}>
                    <Col xs={6} className="mx-auto">
                        <label htmlFor=""><b>Question</b></label>
                        <input type="text" placeholder="Enter Question" className="form-control" value={question} onChange={(event) => setQuestion(event.target.value)} />
                    </Col>
                </Row>
            </div>
            <div>
                <Row style={{ marginBottom: '2%' }}>
                    <Col xs={6} className="mx-auto">
                        <label className="form-label"><b>Answer</b></label>
                        <textarea style={{ width: 620 }} placeholder="Enter Answer" className="form-control" rows="8" onChange={(event) => setAnswer(event.target.value)} value={answer} ></textarea>
                    </Col>
                </Row>
            </div>
            <br />
            <div className="text-center">
                <button className="btn btn-success" onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default QA
