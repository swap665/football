import React, { useState,useEffect } from 'react';
import Papa from 'papaparse';

import './home.css';
import './popup.css';
import Popup from './Popup';

import Navrbar from './Navbar';

const Home=(props)=>{
    const[team,setTeam]=useState("My Team")
    const [selectedFile, setSelectedFile] = useState(null);
    const [visibility, setVisibility] = useState(false);
    let count=0;
  let goal=0;
  let defener=0;
  let mid=0;
  let forward=0;
    const popupCloseHandler = (e) => {
      setVisibility(false);
    };
    const selectCol=[0,2,3,4,5,6]
   
      // Update count after component mounts
     
      console.log("hello",selectedFile)

    
      
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
          complete: (result) => {
            setSelectedFile(result.data);
          },
          header: false, // Assuming there's no header in the CSV file
          skipEmptyLines: true,
          dynamicTyping: true,
        });
      };
      if(selectedFile!=null){
        selectedFile.forEach(row => {
          row.forEach(element => {
            if (element === 'Goalkeeper') {
              goal++;
            }
            if(element==='Defender'){
              defener++;
            }
            if(element==='Midfielder'){
              mid++;
            }
            if(element==='Forward'){
              forward++
            }
            
          });
          count=count+1;
        });}
    return(<div className='divide'>
        <Navrbar/>
        <div className='page'>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'40px',marginLeft:'40px'}}>
            <div>
            <div style={{color:'rgba(254, 160, 19, 1)',fontFamily:'Poppin',fontWeight:'500',fontSize:'12px',lineHeight:'24px'
}}>Roster Details</div>
            <div style={{color:'rgba(248, 248, 248, 1)',fontFamily:'Poppin',fontWeight:'600',fontSize:'18px'
}}>{team}</div>
                
            </div>
            <div style={{marginRight:'40px'}}><input type='text' placeholder=' find player' style={{width: '248px',height: '44px',backgroundColor:'rgba(34, 34, 34, 1)',color:'rgba(153, 153, 153, 1)',padding: '12px, 16px, 11px, 16px',borderRadius: '8px',border: '1px solid rgba(153, 153, 153, 1)'}}/>
            <button onClick={(e) => setVisibility(!visibility)} style={{width:'132px',height: '44px',padding: '12px, 20px, 11px, 20px',borderRadius: '8px',backgroundColor:'rgba(254, 160, 19, 1)',color:'rgba(248, 248, 248, 1)',fontFamily: 'Poppins',fontSize: '14px',
fontWeight: '500',
marginLeft:'8px',
textAlign: 'center'

}}>Import Team</button>
<Popup
        onClose={popupCloseHandler}
        show={visibility}
        title="Imposter"
    

      >
        
    <div >
        <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{direction:'rtl',border: '1px solid rgba(73, 73, 73, 1)',width: '300px',
height: '44px',
borderRadius: '8px',
textAlign:'center',
color:'rgba(153, 153, 153, 1)',
}}
    />
    <p style={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400px',
textAlign: 'left',
color:'rgba(153, 153, 153, 1)'
}}>file must be in .csv format</p>
{selectedFile?<div>
<div style={{
fontFamily: 'Poppins',
fontSize: '15px',
fontWeight: '500',
color:'rgba(248, 248, 248, 1)',
marginTop:'30px'
}}>
    File Summary
</div>
<div style={{color:'white',
fontSize: '14px',
fontWeight: '300',
marginTop:'10px'
}}>
<div>
      <table>
       
          <tr>
            <td>Total Player</td>
            <td>GoalKeepers</td>
            <td>Defenders</td>
            <td>Midfielders</td>
            <td>Forwards</td>
          </tr>
        
        <tbody>
        <tr>
        <td>{count}</td>
        <td>{goal}</td>
        <td>{defener}</td>
        <td>{mid}</td>
        <td>{forward}</td>
        </tr>
          
        </tbody>
      </table>
    </div>
    <div>
    <button  onClick={popupCloseHandler} className="btn">Import</button>
</div>

</div>
</div>:''}
        <div className='content'>{props.children}</div>
        </div>
      </Popup>
        </div>
            
        </div>
        <div className='innerpage'>
            
             
          
           {selectedFile?<div>
            <table>
      <tbody>
        {selectedFile.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {selectCol.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
           :
           <div>
           <div style={{marginTop:'7px',marginLeft:'20px',marginRight:'20px'}}>
                <ul style={{display:"flex",fontFamily: 'Poppins',
fontSize: '12px',
fontWeight:'500',
color:'rgba(203, 203, 203, 1)',
textAlign:'center',
justifyContent:'space-between'
}}>
                    <li>Player Name</li>
                    <li>Jersey Number</li>
                    <li>Postion</li>
                    <li>Height</li>
                    <li>Weight</li>
                    <li>Nationality</li>
                </ul>
            </div>
            <div style={{alignContent:'center',justifyContent:'center',display:'grid',height:'100%',marginTop:'300px'}}>
<div style={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
color:'rgba(203, 203, 203, 1)'
}}>You do not have any player to roster</div>
                
                <button onClick={(e) => setVisibility(!visibility)} style={{backgroundColor:' rgba(73, 73, 73, 1)',color:'rgba(254, 160, 19, 1)',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '500',
textAlign: 'center',
border:'none'
}}>import Team</button>
            </div>
            </div>}
        </div>
        </div>
        </div>
    )
}
export default Home;