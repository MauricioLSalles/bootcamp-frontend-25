import ListItem from "../molecules/ListItem";

function List(props) {
const {items:items,...organismProps} = props;
  return (
    <ul {...organismProps}>{
        items.map((item, id)=><ListItem key={id} text={item.text} clicked={item.clicked} /> )
    }</ul>
  )
}

export default List