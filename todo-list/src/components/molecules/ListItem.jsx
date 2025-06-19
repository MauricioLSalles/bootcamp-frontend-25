import React from 'react'
import Check from '../atoms/Check'
import Button from '../atoms/Button';

function ListItem(props) {
    const {
      text:text,
      id:id,
      deleteItem:deleteItem,
      editItem:editItem,
      ...moleculeProps} = props;
  return (
    <li {...moleculeProps}>
        <Check/>
        <span>{text}</span>
        <Button onClick={()=>editItem(id)} text={"Edit"}/>
        <Button onClick={()=>deleteItem(id)} text={"Delete"}/>
    </li>
  )
}

export default ListItem