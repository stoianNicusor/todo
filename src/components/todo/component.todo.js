import React from 'react';
import './style.todo.scss';
import PropTypes from 'prop-types';

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

ToDo.propTypes ={
  take: PropTypes.any,
  addTodo: PropTypes.func
}


export default ToDo;