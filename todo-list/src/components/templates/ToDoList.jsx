import { useReducer, useRef } from 'react'
import InputButton from '../molecules/InputButton';
import List from '../organisms/List';

function reducer(state, action){
    if(action.type === 'added'){
        return [...state, {text:action.text, clicked:false}]
        
    }
    if(action.type === 'edited'){
        if(action.click !== undefined)
            state[action.id].clicked = !action.click;
        else
        state[action.id].text = action.text;
        return  [...state]
    }
    if(action.type === 'deleted'){
        state.splice(action.id,1);
        return  [...state]
    }
    throw new Error("unkown action"); 
}

function ToDoList() {
    const [items, dispatch] = useReducer(reducer, []);
    const input = useRef("");    

    function addItem(){
        dispatch({
            type:'added',
            text: input.current.value,
        })
    }

    function editItem(id,click){
        dispatch({
            type:'edited',
            text: input.current.value,
            id: id,
            click:click
        })
    }

    function deleteItem(id){
        dispatch({
            type:'deleted',
            id: id
        })
    }



  return (
    <div>
        <InputButton addItem={addItem} inputRef={input} buttonText="Add" inputPlaceHolder="Add Task" />
        <List editItem={editItem} deleteItem={deleteItem} items={items}/>
    </div>
  )
}

export default ToDoList