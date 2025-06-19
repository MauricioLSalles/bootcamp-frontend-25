import ListItem from "../molecules/ListItem";

function List(props) {
const {
    items:items,
    deleteItem:deleteItem,
    editItem:editItem,
    ...organismProps} = props;
  return (
    <ul {...organismProps}>{
        items.map((item, id)=>
            <ListItem key={id} id={id} text={item.text} clicked={item.clicked} deleteItem={deleteItem} editItem={editItem} /> 
        )
    }</ul>
  )
}

export default List