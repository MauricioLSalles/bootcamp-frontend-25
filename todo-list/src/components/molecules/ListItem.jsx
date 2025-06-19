import React from 'react'
import Check from '../atoms/Check'
import Button from '../atoms/Button';

function ListItem(props) {
    const {text:text,...moleculeProps} = props;
  return (
    <li {...moleculeProps}>
        <Check/>
        <span>{text}</span>
        <Button text={"Edit"}/>
        <Button text={"Delete"}/>
    </li>
  )
}

export default ListItem