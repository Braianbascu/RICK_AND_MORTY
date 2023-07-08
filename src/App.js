import Cards from './components/cards/Cards';
import NavBar from './components/navBar/navBar';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './views/about/about';
import Detail from './views/detail/detail';
import './App.css';

import LoginForm from './components/form/loginForm';



function App() {
   
   const [characters, setCharacters] = useState ([]);
   const location= useLocation();

   function searchHandler(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      
   });
   }
   function closeHandler(id){
     let deleted = characters.filter((character)=>character.id !== Number(id));
     
     setCharacters(deleted)
   }

   return (
      <div className='App'>
        
        <div>
         {location.pathname !== "/" && <NavBar onSearch={searchHandler}/> }
         

         <Routes>
            <Route path='/' element={<LoginForm/>}></Route> 
            <Route path='/home' element={ <Cards characters={characters}  onClose={closeHandler} />}></Route>
            <Route path='/details/:id' element={<Detail/>}></Route>   
            <Route path='/about' element={<About/>}></Route>    
            <Route path= '/*' element={''}></Route> 
         </Routes>
         </div>
       
      </div>
   );
}

export default App;

// recibo info de personajes de la carptea data. cada objeto es un personaje, lo envio por props a cards, el cual lo recibe y los mapea (itera) para generar una card por cada personaje y mando por props a Card 1 solo personaje y por destructuring paso los datos informacion que necesito en cada una. 
// recorda que no cramos func dentro de las props, las creamos por fuera y las mandamos por un handler

// Para trabajar en ciclo de vida, yo cree un estado que iguale primero en un array vacio y use setCharacter para modificar el mismo e impactar en el ciclo de vida. 

// Mediante axios nos comunicamos a una fuente externa por medio el  id, el cual obtengo desde la barra de personaje del input. al hacer click en AGREGAR busco el personaje y busco el estado. 
// Ademas agregamos a onClose en la cual uso la "negacion" para quedarme con todo menos con eso, y en el boton al ser ejecutada envia el id del personaje {character.id} corresponde al que renderisa
// Cuando quiero acceder al detail, uso useParams al dejar el :id pido por asi decirlo deje guardado ese algo y lo uso o traigo con useParams