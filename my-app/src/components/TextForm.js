import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")

    const onUpCick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    const onClickChange = (event) => {
        //console.log("ON change")
        setText(event.target.value)
    }

    function countWords(str) {
        
        str = str.replace(/(^\s*)|(\s*$)/gi,""); // remove first and last space
        str = str.replace(/[ ]{2,}/gi," "); //remove multiple space and repace woth one space
        str = str.replace(/\n /,"\n"); // ????? not sure check https://www.tutorialspoint.com/how-to-count-a-number-of-words-in-given-string-in-javascript
        //setText(str)
        return str.split(' ').length;
    }

    return (
        <>
            <div>   
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onClickChange} rows="8"></textarea>
                    <div className='my-3'>
                        <button className='btn btn-primary' onClick={onUpCick}>Uppercase</button>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <h1>Text Summary</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
            </div>

            
        </>
    )
}
