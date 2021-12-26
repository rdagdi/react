import React from 'react'

export default function TextForm(props) {
    return (
        <div>   
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                
            </div>
        </div>
    )
}
