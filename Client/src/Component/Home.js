import React from 'react';
import { useEffect, useState } from 'react';
import { fechtTechnologies } from '../hooks/technologyHook';
import axios from 'axios';
function Home() {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [ questionSelected , setQuestionSelected] = useState([])
    const [answer , setAnswer] = useState("")
    const [showAnswer , setShowAnswer] = useState("")

    useEffect(() => {
        fechtTechnologies().then(resp => setTechnologies(resp.data)).catch(err => console.log("Error fetching error", err));
    }, [])

    const handleTechnologyChange = (event) => {
      setSelectedTechnology(event.target.value);
      debugger;
      axios.post("http://localhost:8080/question",{technology : event.target.value}).then(resp=>setQuestionSelected(resp.data)).catch(err=>console.log("Error ",err))
    };
    const handleAnswer = (event)=>{
        debugger;
        setAnswer(event.target.value);
        const filteredData  =  questionSelected.filter((item,index)=>item._id===event.target.value);
        setShowAnswer(filteredData[0].answer);
    }
  
    return (
        <>
            <div style={{ display: 'flex', marginTop: '3%' }}>
                <div className="form-container" style={{ marginLeft: '5%', marginRight: '3%' }}>
                    <div className="form-group" style={{ marginTop: '12%', width: 400 }}>
                        <label htmlFor="technology" className='mb-2'><b>Technologies</b></label>
                        <select className="form-select" id="technology" 
                                value={selectedTechnology}
                                onChange={handleTechnologyChange}
                        >
                            <option>Select Technology</option>
                            {technologies.length > 0
                                ? technologies.map(item => (
                                    <option key={item._id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))
                                : <option>Loading...</option>}
                        </select>
                    </div>

                    <div className="form-group" style={{ marginTop: '18%', width: 400 }}>
                        <label htmlFor="question" className='mb-2'><b>Questions</b></label>
                        <select className="form-select" id="question"  value={answer} onChange={handleAnswer}>
                            <option value="reacttutorial">Select Question</option>
                         {questionSelected.length>0 ? 
                          questionSelected.map(item=>
                            <option key={item._id} value={item._id}>{item.question}</option>) : "Loading..."}
                        </select>
                    </div>
                </div>

                <div className="form-group" style={{ marginLeft: '4%', width: 600, marginTop: '3%' }}>
                    <label htmlFor="answer" className='mb-2'><b>Answers</b></label>
                    <textarea className="form-control" id="answer" rows="12" value={showAnswer} ></textarea>
                </div>
            </div>
        </>
    );
}

export default Home;