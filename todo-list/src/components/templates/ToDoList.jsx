import { useState } from 'react'
import InputButton from '../molecules/InputButton'
import List from '../organisms/List'

function ToDoList() {
    const [items, setItems] = useState([{text:"1",clicked:true}]);
  return (
    <div>
        <InputButton buttonText="Add" inputPlaceHolder="Add Task" />
        <List items={items}/>
    </div>
  )
}

export default ToDoList