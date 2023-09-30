import React from 'react';
import { useEffect, useState } from 'react';
import { fechtTechnologies } from '../hooks/technologyHook';

function Home() {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState('');

    useEffect(() => {
        fechtTechnologies().then(resp => setTechnologies(resp.data)).catch(err => console.log("Error fetching error", err));
    }, [])

    const handleTechnologyChange = (event) => {
      setSelectedTechnology(event.target.value);
    };
  
    return (
        <>
            <div style={{ display: 'flex', marginTop: '3%' }}>
                <div className="form-container" style={{ marginLeft: '5%', marginRight: '3%' }}>
                    <div className="form-group" style={{ marginTop: '12%', width: 400 }}>
                        <label htmlFor="technology"><b>Technologies</b></label>
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
                        <label htmlFor="question"><b>Questions</b></label>
                        <select className="form-select" id="question">
                            <option value="reacttutorial">ReactTutorial</option>
                            <option>Select Question</option>
                            <option value="SQL">SQL</option>
                        </select>
                    </div>
                </div>

                <div className="form-group" style={{ marginLeft: '4%', width: 600, marginTop: '3%' }}>
                    <label htmlFor="answer"><b>Answers</b></label>
                    <textarea className="form-control" id="answer" rows="12"></textarea>
                </div>
            </div>
        </>
    );
}

export default Home;