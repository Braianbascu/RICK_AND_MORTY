import Card from "../card/Card";
import style from "./cards.module.css"


export default function Cards(props) {
   const {characters, onClose}=props

   return (<div  className={style.cardList}>
      {characters?.map((character)=> (
         <Card key={character.id} character={character} onClose ={onClose}/>
      ))}
   </div>);
}

// me traigo con constantes las propiedades que quiero con destructuring y digo de donde (=props), luego las puedo usar en el return