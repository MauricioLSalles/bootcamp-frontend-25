import Button from "../atoms/Button"
import Input from "../atoms/Input"

function InputButton(props) {
    const {
        inputPlaceHolder:inputPlaceHolder,
        addItem:addItem, 
        buttonText:buttonText,
        updateInput:updateInput,
        inputValue:inputValue,
        ...moleculeProps} = props;
  return (
    <div {...moleculeProps}>
        <Input onChange={(e)=> updateInput(e.target.value)} value={inputValue} placeholder={inputPlaceHolder}/> 
        <Button onClick={addItem} text={buttonText}/>
    </div>
  )
}

export default InputButton