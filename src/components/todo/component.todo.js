import React from 'react';
import './style.todo.scss';

function ToDo(props){

    return(
       <div className='todo'>
           <input className='input' name='input' id='input' placeholder='  Add ToDo' autoComplete='off'  onChange={props.take}/>
           <button className='btn' onClick={props.addTodo} >
               Add
           </button>
        </div>
    )
}


export default ToDo;