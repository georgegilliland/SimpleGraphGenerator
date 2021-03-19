import React, { useState, useEffect }  from 'react';
import style from './FileInput.module.css';

const FileInput = ({ handleFileRead }) => {

    let fileReader;
    const [stateObj, setState] = useState({
        "file": false
    });

    // On file input change and succesfull attachment, send back to parent
    const handleFile = (file) => {
        if (file[0] instanceof Blob) {
            fileReader = new FileReader(); 
            fileReader.readAsText(file[0]);
            
            fileReader.addEventListener('error', (e) => {
                console.error(`Error occurred reading file: ${file[0].name}`);
            });
    
            fileReader.addEventListener('load', (e) => {
                let tmpStateObj = {...stateObj}
                tmpStateObj.file = !tmpStateObj.file;
                setState(tmpStateObj);
                handleFileRead({"name": file[0].name, "data": e.target});
            });
        }
    }

    const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
    
    return <div>
        <input 
            type="file"
            id="file"
            className="input-file"
            accept=".csv"
            onChange = {e => handleFile(e.target.files)}
            style={{display:'none'}}
            ref={hiddenFileInput}
        />
        <div>
        <div>

        </div>
        <button className={style.FileUploadButton} onClick={handleClick}>
            {stateObj.file === true ? "Got a file!" : "Upload a file"}
        </button>
        </div>
    </div>

}

export default FileInput;
