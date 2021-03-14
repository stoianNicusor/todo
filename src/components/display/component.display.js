import React,{useState} from 'react';
import './style.display.scss';
import {BsTrash} from 'react-icons/bs';
import {FcCheckmark} from 'react-icons/fc';

function Display(props){
    
    const {
        list,
        remove,
        complet
    } = props

    return(
        <div className='display'>
        { list.map( (list,index) => (
            <div className='lista' key= {index} id={'lista' + index} >
                {list}
                <button className='btnCheck' onClick={complet.bind(this, index)}> <FcCheckmark/> </button>
                <button className='btnRemove' onClick={remove.bind(null, list)}> <BsTrash/> </button>
            </div>
        ))}
        </div>
    )
}

export default Display;
