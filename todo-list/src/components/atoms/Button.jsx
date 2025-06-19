
function Button(props) {
    const {text: text, ...buttonProps} = props;
  return (
    <button {...buttonProps}>{text}</button>
  )
}

export default Button