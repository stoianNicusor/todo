import React from 'react';
import './style.display.scss';
import {BsTrash} from 'react-icons/bs';
import {FcCheckmark} from 'react-icons/fc';

function Display(props){
    
    const {
        list,
        remove,
        complet,
        check
    } = props
  
    return(
        <div className='display'>
        { list.map( (list,index) => (
            <div className={ check[list] == true ? 'lista complet' : 'lista'} key= {index} id='lista' >
                {list}
                <button className='btnCheck' onClick={complet.bind(this, list)}> <FcCheckmark/> </button>
                <button className='btnRemove' onClick={remove.bind(null, list)}> <BsTrash/> </button>
            </div>
        ))}
        </div>
    )
}

export default Display;