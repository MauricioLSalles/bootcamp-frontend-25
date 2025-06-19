import Button from "../atoms/Button"
import Input from "../atoms/Input"

function InputButton(props) {
    const {inputPlaceHolder:inputPlaceHolder, buttonText:buttonText,...moleculeProps} = props;
  return (
    <div {...moleculeProps}><Input placeholder={inputPlaceHolder}/> <Button text={buttonText}/></div>
  )
}

export default InputButton