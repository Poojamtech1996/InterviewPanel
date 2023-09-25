import React from 'react';


function Home() {

    return (
        <>
            <div className="form-group">
                <label htmlFor="">Technology</label>
                <select style={{ width: 500 }} className="form-select form-select-md" aria-label=".form-select-lg example">
                    <option>Select Technology</option>
                    <option value="reacttutorial">ReactTutorial</option>
                    <option value="SQL">SQL</option>
                </select>
            </div>

            <br />

            <div className="form-group">
                <label htmlFor="">Question</label>
                <select style={{ width: 1000 }} className="form-select form-select-md" aria-label=".form-select-lg example">
                    <option>Select Questions</option>
                    <option value="reacttutorial">ReactTutorial</option>
                    <option value="SQL">SQL</option>
                </select>
            </div>

            <br />

            <div className="mb-6">
                <label className="form-label">Answer</label>
                <textarea style={{width:1000}}  className="form-control" rows="7"></textarea>
            </div>
        </>
    );
}

export default Home;