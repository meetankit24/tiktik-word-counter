import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    // text="my new stae data " // wrong way to do so
    // setText("new data")   //right way to do so

    const handleUpCase = () => {
        let upcase = text.toUpperCase()
        setText(upcase)   //right way to do so

    }
    const handleLowCase = () => {
        let lowcase = text.toLocaleLowerCase()
        setText(lowcase)   //right way to do so

    }
    const handleOnChange = (event) => {
        setText(event.target.value)   //right way to do so
    }

    return (
        <div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    {/* agar value=something hai to onchange event call lagana padega warna text input nahi lene dega'*/}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpCase}> Convert to Up-case</button>
                <button className='btn btn-primary mx-2' onClick={handleLowCase}> Convert to Low-case</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary-</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview here..."}</p>
            </div>
        </div>
    )
}
