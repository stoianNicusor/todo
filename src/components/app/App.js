import React, {useState,useEffect} from 'react';
import './App.scss';
import ToDo from '../todo/component.todo';
import Display from '../display/component.display';


const storage = 'todo';

function App() {
 
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

 /**
   * Return to check from localStorage
   * 
   * If localStorage it's true
  */
  const [check, setCheck] = useState(() => { 
  const item = localStorage.getItem('check');
    return item ? JSON.parse(item) : {};
  });

/**
 * Return the check to LocalStorage
 * 
 * @dep {array} is state that gets update for any changes in check
 */
  useEffect(() => {
    localStorage.setItem('check', JSON.stringify(check));
  }, [check]);

  /**
   * Function to set the item with TRUE or False
   * 
   * On is the item form the list
  */
  let complet = (on) =>{
    if(check[on] == false || check[on] == null){
      setCheck({...check, [on]: true})
    }
    else{
      setCheck({...check, [on]: false})
    }  
  } 

  /** 
   * Function to update the state 
   * 
   * @ take the input from user
  */ 
  let take = (e) => {
    setInput(e.target.value);
  } 

 /**
   * Function to update the state List
   * 
   * @ Reset the input champ
  */ 
  let addTodo = () => {
    setList([...list, input])
    document.getElementById('input').value = '';
  } 

  /** 
   * Function to remove item for the list
   * 
   * @ Deleted it's string form the list
  */ 
  let removeItem = (Deleted) => {
   setList(list.filter( list_ => list_ != Deleted));
  }
  
  /**
   * Return the item from LocalStorage
   * 
   * @Const save it's true then setList
   * [] for any changes to window
  */
  useEffect( () => {
    const save = JSON.parse(localStorage.getItem(storage));

    if(save){
      setList(save);
    }

  },[])

  /**
   * Return the list to LocalStorage
   * 
   * @dep {array} is state that gets update for any changes in list
  */
  useEffect( () => {
    localStorage.setItem(storage, JSON.stringify(list));
  }, [list]);

  return(
    <div className="app">
      <div className='title' >ToDo List</div>
      <ToDo take = {take} addTodo = {addTodo} />
      <Display list = {list} remove = {removeItem}  check ={check} complet ={complet}/>
    </div>
  )
}

export default App;
