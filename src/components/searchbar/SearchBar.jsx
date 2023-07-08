import { useState } from "react";
import style from "./searchBar.module.css"

export default function SearchBar(props) {
   const {onSearch}= props

   const [id, setId] = useState('')
   function changeHandler (e){
      e.preventDefault();
      let input= e.target.value 

      setId(input)
   }


   return (
      <div className={style.SearchBar}>
         <input className={style.searchInput} type='search' value={id} onChange={changeHandler} />
         <button className={style.button} onClick={()=>onSearch(id)}>START</button>
      </div>
   );
}



// Genere un estado llamado ID, con su respectiva funcion de cambio. al escribir en el input el estado toma dicho valor, es decir se va actualizando el ID y el valor cambia. 
// al hacer click, la funcion de busqueda utiliza el valor que va tomando el input. 