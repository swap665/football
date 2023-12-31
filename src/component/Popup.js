import { useEffect, useState } from "react";


import './popup.css'
import Home from "./Home";
const Popup = (props) => {
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  
    console.log(selectedFile)
    
      
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className='overlay'
    >
      <div className='popup'>
        <p className="title">{props.title}</p>
        <span className='close' onClick={closeHandler}>
          &times;
        </span>
        <div style={{backgroundColor:'rgba(73, 73, 73, 1)' ,width: '99%',
marginTop: '10px',
marginLeft: '2px',
height:'3px',
border: '1px',
borderRadius:'5px'

}}>

</div>
<p className="title2">Roster File</p>

        <div className="content">{props.children}</div>
        
       
      </div>
    </div>
  );
};





export default Popup;
