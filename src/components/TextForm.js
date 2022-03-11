import React,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed!","success")
    }

    const [text,setText] = useState("Enter text here");
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                    style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>

    )
}