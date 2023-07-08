import SearchBar from '../searchbar/SearchBar'
import style from './navBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar({onSearch}) {
    return(
        <div className={style.navContainer}>
            <div className={style.buttonContainer}>
                <Link to="/about">
                    <button className={style.neonButton}>ABOUT</button>
                </Link>
                <Link to="home">
                <button className={style.neonButton}>HOME</button>
                </Link>
             </div>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}


// Aca creo la barra de navegacion, en la misma me importo la barra de busqueda. es estilo propio de la barra de navegacion
// y una vez que esta creo el componente funcional el cual renderica a la searchbar creada anteriormente (agrego los estilos que queria)