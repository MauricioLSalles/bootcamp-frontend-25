import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default function MainSection() {

    const {value, update} = useContext(LanguageContext);
    
    return (
      <div>
        <Text id="favoriteLanguage">favorite programing language: {value}</Text>
        <Button onClick={update} id="changeFavorite">toggle language</Button>
      </div>
    )
   }