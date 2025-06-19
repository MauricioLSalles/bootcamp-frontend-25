import { useState } from 'react'
import InputButton from '../molecules/InputButton'
import List from '../organisms/List'

function ToDoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addItem(){
        items.push({text:inputValue, clicked:false});
        setItems([...items]);
        setInputValue("");
    }

    function editItem(index, check){
        if(check !== undefined){
            items[index].clicked = !items[index].clicked;
            setItems([...items]);
            return;
        }
        items[index].text = inputValue;
        setItems([...items]);
        setInputValue("");
    }

    function deleteItem(index){
        items.splice(index,1);
        setItems([...items]);
    }



  return (
    <div>
        <InputButton addItem={addItem} inputValue={inputValue} updateInput={setInputValue} buttonText="Add" inputPlaceHolder="Add Task" />
        <List editItem={editItem} deleteItem={deleteItem} items={items}/>
    </div>
  )
}

export default ToDoList