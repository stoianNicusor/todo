import React from 'react';
import './style.display.scss'

function Display(props){
 
    const {
        list,
        remove
    } = props
    
    return(
     <div className='display'>
      { list.map( (list,index) => (
          <div className='lista' key= {index}>
             {list}
            <button className='btn' onClick={remove.bind(null, list)}>X</button>
         </div>
    ))}
       
     </div>
    )
}

export default Display;
