import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  //const a = 'HIman'
  // console.log(typeof a)

  const onUpCick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const onLoCick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const onClickChange = (event) => {
    //console.log("ON change")
    setText(event.target.value);
  };
  //console.log(typeof countWordsabc)
  const countWordsabc = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/gi, ""); // remove first and last space
    str = str.replace(/[ ]{2,}/gi, " "); //remove multiple space and repace woth one space
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
  };
  //console.log(typeof countWordsabc)

  // console.log(typeof countWords)
  function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, ""); // remove first and last space
    str = str.replace(/[ ]{2,}/gi, " "); //remove multiple space and repace woth one space
    str = str.replace(/\n /, "\n"); // ????? not sure check https://www.tutorialspoint.com/how-to-count-a-number-of-words-in-given-string-in-javascript
    //setText(str)
    return str.split(" ").length;
  }
  //console.log(typeof countWords)
  const removeExtraSpace = () => {
      let txt = text.split(/[ ]+/g)
      //console.log(txt)
      setText(txt.join(" "))
  }

  const copy = () => {
    let newText = document.getElementById('exampleFormControlTextarea1')
    newText.select()
    navigator.clipboard.writeText(newText.value)
    console.log(newText)
  };

  return (
    <>
      <div>
        <div className="mb-3" >
          <h1>{props.heading}</h1>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={onClickChange}
            rows="8"
          ></textarea>
          <div className="my-3">
            <button className="btn btn-primary mx-1" onClick={onUpCick}>
              Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={onLoCick}>
              Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={copy}>
              Copy Text
            </button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>
            Remove Extra Space
            </button>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h1>Text Summary</h1>
        <p>
          {countWordsabc(text)} words and {text.length} characters
        </p>
        <p>{0.008 * countWords(text)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
