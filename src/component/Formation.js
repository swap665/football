import React,{useState} from 'react';
import Navrbar from './Navbar';
import icon from '../asset/Field.jpg';
const Formation=()=>{
    const[team,setTeam]=useState("My Team")
return(
    <div className='divide'>
    <Navrbar/>
    <div className='page'>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'40px',marginLeft:'40px'}}>
            <div>
            <div style={{color:'rgba(254, 160, 19, 1)',fontFamily:'Poppin',fontWeight:'500',fontSize:'12px',lineHeight:'24px'
}}>Formation Overview</div>
            <div style={{color:'rgba(248, 248, 248, 1)',fontFamily:'Poppin',fontWeight:'600',fontSize:'18px'
}}>{team}</div>
                
            </div>
            </div>
        <div className='innerpage' style={{display:'flex',marginTop:'37px',marginLeft:'40px',marginRight:'40px'}}>
            <div>
            <img style={{width: '880px',
height: '541px',
marginTop: '32px',
marginLeft: '32px',
borderRadius:'5px'

}} src={icon} alt=""/>
            </div>
           
                
                <div style={{width: '360px',
height: '541px',
padding: '377px, 24px, 164px, 24px',
backgroundColor:'rgba(34, 34, 34, 1)',
marginTop: '32px',
marginLeft: '50px',
}}>
<div style={{backgroundColor:'rgba(73, 73, 73, 1)' ,width: '274px',
marginTop: '350px',
marginLeft: '36px',
height:'3px',
border: '1px',
borderRadius:'5px'

}}>

</div>
              
            </div>
            </div>
            
        </div>

        </div>
    
    
)
}
export default Formation