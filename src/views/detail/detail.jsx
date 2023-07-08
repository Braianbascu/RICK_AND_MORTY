import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import style from "./details.module.css"


function Detail () {
    
    const {id}= useParams();
    const [character, setCharacter]= useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className= {style.detailContainer}>
            <div>
            <h1>Name:{character.name}</h1>
            <img src={character.image} alt={character.name} />
            </div>
            <div className={style.detail}>
            <div>
            <h3>Status:</h3>
            <p>{character.status}</p>
            </div>
            <div>
            <h3>spicies:</h3>
            <p>{character.spicies}</p>
            </div>
            <div>
            <h3>Gender:</h3>
            <p>{character.gender}</p>
            </div>
            <div>
            <h3>origin:</h3>
            <p>{character.origin?.name}</p>
            </div>
            </div>
        </div>
    )
}

export default Detail;

// Me importe useParams y traigo el id con destructuring ya que usP me devuelve un objeto. 
// genero un estado y su posibilidad de cambiarlo con setState asignado a setCharacter
// Cuidado como lo inicializamos. {} no []
// en origin pongo un condicional ? en donde espero extraer lo de origin y luego el name 