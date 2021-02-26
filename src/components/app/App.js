import React, {useState,useEffect} from 'react';
import './App.scss';
import ToDo from '../todo/component.todo';

const storage = 'todo'

function App() {
  
  //console.log(Math.floor((Math.random() * 100) + 1))

  const [input, setInput] = useState([]);
  const [list, setList] = useState([]);

  let take = (e) => {
    setInput(e.target.value)
  } 
 
  let addTodo = () => {
    setList([...list, input])
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
    </div>
  )
}

export default App;
