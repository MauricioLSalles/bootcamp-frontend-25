import Button from "../atoms/Button"
import Input from "../atoms/Input"

function InputButton(props) {
    const {
        inputPlaceHolder:inputPlaceHolder,
        addItem:addItem, 
        buttonText:buttonText,
        inputRef:inputRef,
        inputValue:inputValue,
        ...moleculeProps} = props;
  return (
    <div {...moleculeProps}>
        <Input ref={inputRef} value={inputValue} placeholder={inputPlaceHolder}/> 
        <Button onClick={addItem} text={buttonText}/>
    </div>
  )
}

export default InputButton