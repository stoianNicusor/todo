import React, {useState,useEffect} from 'react';
import './App.scss';
import ToDo from '../todo/component.todo';
import Display from '../display/component.display';

const storage = 'todo'

function App() {
 
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  let take = (e) => {
    setInput(e.target.value)
  } 
 
  let addTodo = () => {
    setList([...list, input])
    document.getElementById('input').value = '';
  } 

  let removeItem = (Deleted) => {
   setList(list.filter( list_ => list_ != Deleted));
  }
  
  useEffect( () => {
    const save = JSON.parse(localStorage.getItem(storage));
    if(save){
      setList(save);
    }
  },[])
  
  useEffect( () => {
    localStorage.setItem(storage, JSON.stringify(list));
  }, [list]);

  return(
    <div className="app">
      <h1>ToDo List</h1>
      <ToDo take = {take} addTodo = {addTodo} />
      <Display list = {list} remove = {removeItem} />
    </div>
  )
}

export default App;
