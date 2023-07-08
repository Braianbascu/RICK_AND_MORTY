import { Link } from 'react-router-dom';
import style from './card.module.css'

export default function Card(props) {

   const {character, onClose} = props;
   const {image, name, species, gender, id} = character;
   return (
      <div className={style.cardConteiner}>
         <div className={style.imageContainer}>
         <img className={style.characterImage} src={image} alt={name} />
         <Link to={`/detail/${character.id}`}>
         <h2 className={style.name}>NameP:{name}</h2>
         </Link>
         <button className={style.closeButton} onClick={()=>{onClose(id);}}>X</button>
         </div>
         <div className={style.atributes}>
         <h3>Species:{species}</h3>
         <h3>Gender:{gender}</h3>
         </div>
      </div>
   );
}


// Aca extraigo el personaje asignado. en el cuerpo por cada nombre render traigo su valor con notacion por punto del objeto incluida la imagen
// tambien al pasar el button por props se lo asigno a la etiqueta buton 
// No olvidar extraer las props del Character sino no puedo tomar el id. lo hago en constante 
// no confundir comillas con backtick