import React from 'react';
import './style.todo.scss';

function ToDo(props){

    return(
       <div>
           <input name='input' id='input' placeholder='Add ToDo' type='sumbit'  onChange={props.take}/>
           <button className='add' onClick={props.addTodo} >
               Add todo
           </button>
        </div>
    )
}


export default ToDo;