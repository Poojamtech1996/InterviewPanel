import React from 'react';


function Home() {

    return (
        <>
            <div className="form-group">
                <label htmlFor="">Technology</label>
                <select style={{ width: 500 }} class="form-select form-select-md" aria-label=".form-select-lg example">
                    <option>Select Technology</option>
                    <option value="reacttutorial">ReactTutorial</option>
                    <option value="SQL">SQL</option>
                </select>
            </div>

            <br />

            <div className="form-group">
                <label htmlFor="">Question</label>
                <select style={{ width: 1000 }} class="form-select form-select-md" aria-label=".form-select-lg example">
                    <option>Select Questions</option>
                    <option value="reacttutorial">ReactTutorial</option>
                    <option value="SQL">SQL</option>
                </select>
            </div>

            <br />

            <div class="mb-6">
                <label class="form-label">Answer</label>
                <textarea style={{width:1000}}  class="form-control" rows="7"></textarea>
            </div>
        </>
    );
}

export default Home;