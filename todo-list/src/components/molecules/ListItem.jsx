import React from 'react'
import Check from '../atoms/Check'
import Button from '../atoms/Button';

function ListItem(props) {
    const {
      text:text,
      id:id,
      clicked:clicked,
      deleteItem:deleteItem,
      editItem:editItem,
      ...moleculeProps} = props;

    function handleEditChange(){
      editItem(id)
    }
    function handleDeleteChange(){
      deleteItem(id)
    }
    function handleCheckChange(){
      editItem(id,clicked)
    }
  return (
    <li {...moleculeProps}>
        <Check
        onChange={handleCheckChange}
        checked={clicked}/>
        <span style={{margin:"0 10px"}}>{text}</span>
        <Button style={{display:clicked?"none":"inline-block"}} onClick={handleEditChange} text={"Edit"}/>
        <Button style={{display:clicked?"none":"inline-block"}} onClick={handleDeleteChange} text={"Delete"}/>
    </li>
  )
}

export default ListItem