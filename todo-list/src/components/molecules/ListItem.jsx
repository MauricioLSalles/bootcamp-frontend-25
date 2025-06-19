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
  return (
    <li {...moleculeProps}>
        <Check
        onChange={()=>editItem(id, !clicked)}
        checked={clicked}/>
        <span style={{margin:"0 10px"}}>{text}</span>
        <Button style={{display:clicked?"none":"inline-block"}} onClick={()=>editItem(id)} text={"Edit"}/>
        <Button style={{display:clicked?"none":"inline-block"}} onClick={()=>deleteItem(id)} text={"Delete"}/>
    </li>
  )
}

export default ListItem